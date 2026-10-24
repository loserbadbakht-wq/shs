const axios = require('axios');
const xml2js = require('xml2js');
const fs = require('fs');
const parser = new xml2js.Parser({ explicitArray: false });
const feeds = [
  { url: 'https://raw.githubusercontent.com/loserbadbakht-wq/sh/refs/heads/main/safebooru/safebooru-yuri-rss.xml', filename: 'safebooru-yuri-rss.json' },
  { url: 'https://raw.githubusercontent.com/loserbadbakht-wq/sh/refs/heads/main/notif/new1.xml', filename: 'new1.json' },
  { url: 'https://raw.githubusercontent.com/loserbadbakht-wq/sh/refs/heads/main/notif/new2.xml', filename: 'new2.json' }
];

function escapeBareAmpersands(xml) {
  const parts = xml.split(/(<!\[CDATA\[[\s\S]*?\]\]>)/);
  return parts.map((part, i) => {
    if (i % 2 === 1) return part;
    return part.replace(
      /&(?!(?:amp|lt|gt|quot|apos|#\d+|#x[0-9a-fA-F]+);)/g,
      '&amp;'
    );
  }).join('');
}

function extractImageFromDescription(item) {
  if (!item || typeof item.description !== 'string') return item;
  const imgRegex = /<img\b[^>]*\bsrc="([^"]+)"[^>]*\/?>/i;
  const match = item.description.match(imgRegex);
  if (!match) return item;
  const imageUrl = match[1];
  let newDesc = item.description.replace(imgRegex, '');
  newDesc = newDesc.replace(/^(?:\s|<br\s*\/?>)+/i, '').trim();
  const newItem = {};
  if (item.title !== undefined) newItem.title = item.title;
  if (item.link  !== undefined) newItem.link  = item.link;
  newItem.image = imageUrl;
  for (const key of Object.keys(item)) {
    if (['title', 'link', 'description'].includes(key)) continue;
    newItem[key] = item[key];
  }
  newItem.description = newDesc;
  return newItem;
}

function normalizeAndProcess(result) {
  const channel = result?.rss?.channel;
  if (!channel || !channel.item) return result;
  if (!Array.isArray(channel.item)) {
    channel.item = [channel.item];
  }
  channel.item = channel.item.map(extractImageFromDescription);
  return result;
}

async function fetchAndConvert(feed) {
  const jsonPath = `json/${feed.filename}`;
  try {
    console.log(`Fetching: ${feed.url}`);
    const response = await axios.get(feed.url);
    const cleanedXml = escapeBareAmpersands(response.data);
    let result = await parser.parseStringPromise(cleanedXml);
    result = normalizeAndProcess(result);
    fs.writeFileSync(jsonPath, JSON.stringify(result, null, 2));
    console.log(`✅ Saved: ${jsonPath}`);
  } catch (error) {
    console.error(`❌ Error processing ${feed.url}:`, error.message);
    const fallback = { error: `Failed to fetch: ${error.message}`, timestamp: new Date().toISOString() };
    fs.writeFileSync(jsonPath, JSON.stringify(fallback, null, 2));
    console.log(`⚠️  Fallback written: ${jsonPath}`);
  }
}
async function processAllFeeds() {
  await Promise.all(feeds.map(feed => fetchAndConvert(feed)));
  console.log('All feeds processed!');
}
processAllFeeds();
