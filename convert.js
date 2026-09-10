const axios = require('axios');
const xml2js = require('xml2js');
const fs = require('fs');
const parser = new xml2js.Parser({ explicitArray: false });
const feeds = [
  { url: 'https://raw.githubusercontent.com/loserbadbakht-wq/sh/refs/heads/main/safebooru/safebooru-yuri-rss.xml', filename: 'safebooru-yuri-rss.json' },
  { url: 'https://raw.githubusercontent.com/loserbadbakht-wq/sh/refs/heads/main/notif/new1.xml', filename: 'new1.json' },
  { url: 'https://raw.githubusercontent.com/loserbadbakht-wq/sh/refs/heads/main/notif/new2.xml', filename: 'new2.json' }
];
async function fetchAndConvert(feed) {
  const jsonPath = `json/${feed.filename}`;
  try {
    console.log(`Fetching: ${feed.url}`);
    const response = await axios.get(feed.url);
    const result = await parser.parseStringPromise(response.data);
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
