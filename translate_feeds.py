import json, os, glob, time
from googletrans import Translator
SOURCE_DIR = 'json'
OUTPUT_DIR = 'json/translated'
TARGET_LANG = os.getenv('TARGET_LANG', 'es')
os.makedirs(OUTPUT_DIR, exist_ok=True)
def translate_text(text, translator, retries=3):
    if not text or not isinstance(text, str):
        return text
    for attempt in range(retries):
        try:
            result = translator.translate(text, dest=TARGET_LANG)
            return result.text
        except Exception as e:
            print(f"  Translation error (attempt {attempt+1}): {e}")
            time.sleep(2 ** attempt)
    return text
def translate_feed(data, translator):
    channel = data.get('rss', {}).get('channel', {})
    if channel:
        if 'title' in channel:
            channel['title'] = translate_text(channel['title'], translator)
        if 'description' in channel:
            channel['description'] = translate_text(channel['description'], translator)
        items = channel.get('item', [])
        for idx, item in enumerate(items):
            if 'title' in item:
                item['title'] = translate_text(item['title'], translator)
            if 'description' in item:
                item['description'] = translate_text(item['description'], translator)
            time.sleep(0.3)
    return data
def main():
    if not os.path.isdir(SOURCE_DIR):
        print(f"Source folder '{SOURCE_DIR}' does not exist.")
        return
    json_files = glob.glob(os.path.join(SOURCE_DIR, '*.json'))
    if not json_files:
        print(f"No JSON files found in '{SOURCE_DIR}'.")
        return
    translator = Translator()
    for file_path in json_files:
        filename = os.path.basename(file_path)
        print(f"\n--- Processing: {filename} ---")
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        translated_data = translate_feed(data, translator)
        # Add timestamp to force change
        translated_data['_translated_at'] = time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime())
        output_path = os.path.join(OUTPUT_DIR, filename)
        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(translated_data, f, indent=2, ensure_ascii=False)
        print(f"  ✅ Saved to: {output_path}")
    print("\nAll feeds translated successfully.")
if __name__ == "__main__":
    main()
