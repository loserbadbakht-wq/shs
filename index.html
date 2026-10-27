<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Feed Reader – JSON Feed</title>

    <!-- ====== Video.js Audio Player (module) ====== -->
    <script type="module" src="https://cdn.jsdelivr.net/npm/@videojs/cdn@10.2.0/audio.js"></script>

    <!-- ====== FONT – Self‑hosted Inter Variable ====== -->
    <style>
        @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 1 999;
            src: url('https://raw.githubusercontent.com/loserbadbakht-wq/shs/refs/heads/main/Inter-VariableFont_opsz,wght.ttf') format('truetype-variations');
        }

        @font-face {
            font-family: 'Font Awesome 6 Free';
            font-style: normal;
            font-weight: 900;
            src: url('https://raw.githubusercontent.com/loserbadbakht-wq/shs/refs/heads/main/fa-solid-900.ttf') format('truetype');
        }

        .fas,
        .fa-solid {
            font-family: 'Font Awesome 6 Free';
            font-weight: 900;
            display: inline-block;
            font-style: normal;
            font-variant: normal;
            text-rendering: auto;
            line-height: 1;
        }

        /* ====== ICON DEFINITIONS ====== */
        .fa-rss::before { content: "\f09e"; }
        .fa-moon::before { content: "\f186"; }
        .fa-sun::before { content: "\f185"; }
        .fa-sync-alt::before { content: "\f2f1"; }
        .fa-list-ul::before { content: "\f0ca"; }
        .fa-plus::before { content: "\f067"; }
        .fa-times::before { content: "\f00d"; }
        .fa-check-double::before { content: "\f560"; }
        .fa-calendar-alt::before { content: "\f073"; }
        .fa-external-link-alt::before { content: "\f35d"; }
        .fa-check::before { content: "\f00c"; }
        .fa-undo::before { content: "\f0e2"; }
        .fa-expand::before { content: "\f065"; }
        .fa-arrow-left::before { content: "\f060"; }
        .fa-language::before { content: "\f1ab"; }
        .fa-volume-up::before { content: "\f028"; }
        .fa-stop::before { content: "\f04d"; }
        .fa-check-circle::before { content: "\f058"; }
        .fa-exclamation-circle::before { content: "\f06a"; }
        .fa-info-circle::before { content: "\f05a"; }
        .fa-file-code::before { content: "\f1c9"; }
        .fa-inbox::before { content: "\f01c"; }
        .fa-newspaper::before { content: "\f1ea"; }
        .fa-database::before { content: "\f1c0"; }
    </style>

    <!-- ====== FMHY.NET–INSPIRED CSS ====== -->
    <style>
        :root {
            --bg: #0c0c0c;
            --bg-card: #161616;
            --bg-sidebar: #121212;
            --bg-input: #1e1e1e;
            --bg-hover: #242424;
            --bg-active: #0d1f2a;
            --text: #e6e6e6;
            --text-secondary: #9a9a9a;
            --text-muted: #5a5a5a;
            --border: #262626;
            --border-hover: #383838;
            --primary: #00d4ff;
            --primary-hover: #40e0ff;
            --primary-light: #0a2833;
            --shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
            --radius: 10px;
            --radius-sm: 6px;
            --transition: 0.2s ease;
            --font: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            --max-width: 1320px;
            --header-height: 56px;
        }
        [data-theme="light"] {
            --bg: #f2f2f2;
            --bg-card: #ffffff;
            --bg-sidebar: #f7f7f7;
            --bg-input: #ffffff;
            --bg-hover: #ececec;
            --bg-active: #e6f4fa;
            --text: #1a1a1a;
            --text-secondary: #555555;
            --text-muted: #999999;
            --border: #dddddd;
            --border-hover: #c0c0c0;
            --primary: #0088cc;
            --primary-hover: #00a3e0;
            --primary-light: #e6f4fa;
            --shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: var(--font); background: var(--bg); color: var(--text); min-height: 100vh; transition: background var(--transition), color var(--transition); display: flex; flex-direction: column; background-image: radial-gradient(circle at 20% 30%, rgba(0, 212, 255, 0.03) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(0, 212, 255, 0.02) 0%, transparent 50%); background-attachment: fixed; }
        ::-webkit-scrollbar { width: 4px; height: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: var(--border-hover); border-radius: 20px; }
        ::-webkit-scrollbar-thumb:hover { background: var(--text-muted); }
        .header { background: var(--bg-card); border-bottom: 1px solid var(--border); padding: 0 24px; height: var(--header-height); display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; z-index: 50; backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); transition: background var(--transition), border var(--transition); flex-shrink: 0; }
        .header-left { display: flex; align-items: center; gap: 12px; }
        .header-logo { font-size: 20px; font-weight: 700; color: var(--primary); display: flex; align-items: center; gap: 8px; letter-spacing: -0.3px; }
        .header-logo i { font-size: 22px; }
        .header-logo span { color: var(--text-secondary); font-weight: 400; }
        .header-actions { display: flex; align-items: center; gap: 8px; }
        .header-actions .btn-icon { width: 36px; height: 36px; border-radius: 50%; border: 1px solid var(--border); background: transparent; color: var(--text-secondary); font-size: 15px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all var(--transition); }
        .header-actions .btn-icon:hover { background: var(--bg-hover); border-color: var(--border-hover); color: var(--text); }
        .header-actions .btn-icon.active { background: var(--primary-light); color: var(--primary); border-color: var(--primary); }
        .app { display: flex; flex: 1; max-width: var(--max-width); width: 100%; margin: 0 auto; padding: 20px 24px 24px; gap: 20px; min-height: calc(100vh - var(--header-height)); }
        .sidebar { width: 280px; min-width: 280px; background: var(--bg-card); border-radius: var(--radius); border: 1px solid var(--border); padding: 14px 0; display: flex; flex-direction: column; height: fit-content; max-height: calc(100vh - var(--header-height) - 48px); overflow: hidden; transition: background var(--transition), border var(--transition); position: sticky; top: calc(var(--header-height) + 20px); box-shadow: var(--shadow); }
        .sidebar-header { padding: 0 16px 10px; border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; flex-shrink: 0; }
        .sidebar-header h2 { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.6px; color: var(--text-muted); }
        .sidebar-header .badge { background: var(--bg-hover); color: var(--text-secondary); font-size: 10px; font-weight: 600; padding: 2px 10px; border-radius: 20px; }
        .sidebar-add { padding: 10px 16px 12px; border-bottom: 1px solid var(--border); flex-shrink: 0; }
        .sidebar-add .add-form { display: flex; gap: 6px; }
        .sidebar-add .add-form input { flex: 1; padding: 7px 12px; border: 1px solid var(--border); border-radius: var(--radius-sm); font-size: 13px; background: var(--bg-input); color: var(--text); transition: border var(--transition), background var(--transition); outline: none; min-width: 0; }
        .sidebar-add .add-form input:focus { border-color: var(--primary); box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.15); }
        .sidebar-add .add-form input::placeholder { color: var(--text-muted); }
        .sidebar-add .add-form button { padding: 7px 14px; background: var(--primary); color: #fff; border: none; border-radius: var(--radius-sm); font-size: 12px; font-weight: 600; cursor: pointer; transition: background var(--transition); white-space: nowrap; display: flex; align-items: center; gap: 4px; }
        .sidebar-add .add-form button:hover { background: var(--primary-hover); }
        .sidebar-add .add-form button:disabled { opacity: 0.5; cursor: not-allowed; }
        .sidebar-feed-list { flex: 1; overflow-y: auto; padding: 6px 8px 6px 0; }
        .feed-item { display: flex; align-items: center; gap: 10px; padding: 9px 14px 9px 10px; margin: 0 6px 2px 6px; border-radius: var(--radius-sm); cursor: pointer; transition: all var(--transition); border-left: 3px solid transparent; position: relative; }
        .feed-item:hover { background: var(--bg-hover); }
        .feed-item.active { background: var(--bg-active); border-left-color: var(--primary); }
        .feed-item .feed-icon { width: 30px; height: 30px; border-radius: 6px; background: var(--bg-hover); display: flex; align-items: center; justify-content: center; font-size: 14px; color: var(--text-secondary); flex-shrink: 0; overflow: hidden; }
        /* Align rectangular icons to the left */
        .feed-item .feed-icon img { width: 100%; height: 100%; object-fit: cover; object-position: left center; }
        .feed-item .feed-info { flex: 1; min-width: 0; }
        .feed-item .feed-info .feed-title { font-size: 13px; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .feed-item .feed-info .feed-url { font-size: 10px; color: var(--text-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-top: 1px; }
        .feed-item .feed-count { font-size: 10px; font-weight: 600; color: var(--text-secondary); background: var(--bg-hover); padding: 1px 9px; border-radius: 20px; flex-shrink: 0; }
        .feed-item .feed-remove { background: none; border: none; color: var(--text-muted); font-size: 12px; cursor: pointer; padding: 4px 6px; border-radius: 4px; opacity: 0; transition: all var(--transition); flex-shrink: 0; }
        .feed-item:hover .feed-remove { opacity: 1; }
        .feed-item .feed-remove:hover { background: rgba(220, 38, 38, 0.12); color: #dc2626; }
        [data-theme="light"] .feed-item .feed-remove:hover { background: #fee2e2; color: #dc2626; }
        .sidebar-empty { padding: 40px 20px; text-align: center; color: var(--text-muted); font-size: 13px; }
        .sidebar-empty i { font-size: 28px; display: block; margin-bottom: 10px; opacity: 0.3; }
        .sidebar-empty p { line-height: 1.6; }
        .content { flex: 1; min-width: 0; background: var(--bg-card); border-radius: var(--radius); border: 1px solid var(--border); padding: 0; display: flex; flex-direction: column; transition: background var(--transition), border var(--transition); overflow: hidden; height: fit-content; max-height: calc(100vh - var(--header-height) - 48px); box-shadow: var(--shadow); }
        .content-header { padding: 14px 22px; border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; flex-shrink: 0; flex-wrap: wrap; gap: 8px; }
        .content-header .feed-title-large { font-size: 17px; font-weight: 600; display: flex; align-items: center; gap: 10px; }
        .content-header .feed-title-large .feed-icon-large { width: 30px; height: 30px; border-radius: 6px; background: var(--bg-hover); display: flex; align-items: center; justify-content: center; font-size: 14px; overflow: hidden; flex-shrink: 0; }
        /* Align rectangular icons to the left */
        .content-header .feed-title-large .feed-icon-large img { width: 100%; height: 100%; object-fit: cover; object-position: left center; }
        .content-header .feed-meta { font-size: 12px; color: var(--text-secondary); }
        .content-header .feed-actions { display: flex; gap: 6px; }
        .content-header .feed-actions button { padding: 5px 12px; border: 1px solid var(--border); border-radius: var(--radius-sm); background: transparent; color: var(--text-secondary); font-size: 11px; font-weight: 500; cursor: pointer; transition: all var(--transition); display: flex; align-items: center; gap: 5px; }
        .content-header .feed-actions button:hover { background: var(--bg-hover); border-color: var(--border-hover); }
        .content-header .feed-actions button.primary { background: var(--primary); color: #fff; border-color: var(--primary); }
        .content-header .feed-actions button.primary:hover { background: var(--primary-hover); border-color: var(--primary-hover); }
        .content-items { flex: 1; overflow-y: auto; padding: 12px 16px 20px; }
        .entry-card { padding: 16px 18px 14px; border-radius: var(--radius-sm); border: 1px solid var(--border); margin-bottom: 10px; transition: all var(--transition); cursor: pointer; background: var(--bg-card); }
        .entry-card:hover { border-color: var(--primary); box-shadow: 0 0 0 1px var(--primary), 0 4px 20px rgba(0, 212, 255, 0.06); }
        .entry-card.read { opacity: 0.6; }
        .entry-card.read .entry-title { font-weight: 400; }
        .entry-card .entry-title { font-size: 15px; font-weight: 500; margin-bottom: 4px; line-height: 1.4; color: var(--text); }
        .entry-card .entry-title a { color: inherit; text-decoration: none; }
        .entry-card .entry-title a:hover { color: var(--primary); text-decoration: underline; }
        .entry-card .entry-meta { display: flex; align-items: center; gap: 12px; font-size: 11px; color: var(--text-muted); margin-bottom: 6px; flex-wrap: wrap; }
        .entry-card .entry-meta .entry-date { display: flex; align-items: center; gap: 4px; }
        .entry-card .entry-meta .entry-link { display: flex; align-items: center; gap: 4px; }
        .entry-card .entry-meta a { color: var(--primary); text-decoration: none; }
        .entry-card .entry-meta a:hover { text-decoration: underline; }
        .entry-card .entry-image { margin: 6px 0 8px 0; border-radius: 6px; overflow: hidden; background: var(--bg); max-height: 380px; display: flex; align-items: center; justify-content: center; }
        /* Keep entry images contained but can also align left if needed */
        .entry-card .entry-image img { width: 100%; height: auto; max-height: 380px; object-fit: contain; display: block; }
        .entry-card .entry-desc-preview { font-size: 13px; color: var(--text-secondary); line-height: 1.6; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; word-break: break-word; }
        .entry-card .entry-actions { display: flex; gap: 8px; margin-top: 10px; flex-wrap: wrap; }
        .entry-card .entry-actions button { padding: 3px 12px; border: 1px solid var(--border); border-radius: 4px; background: transparent; color: var(--text-secondary); font-size: 11px; cursor: pointer; transition: all var(--transition); }
        .entry-card .entry-actions button:hover { background: var(--bg-hover); }
        .entry-card .entry-actions button.mark-read { color: var(--primary); border-color: var(--primary); }
        .entry-card .entry-actions button.mark-read:hover { background: var(--primary-light); }
        .entry-card .entry-actions button.fullscreen-btn { color: var(--primary); border-color: var(--primary); }
        .entry-card .entry-actions button.fullscreen-btn:hover { background: var(--primary-light); }
        .content-empty { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; min-height: 300px; color: var(--text-muted); text-align: center; padding: 40px 20px; }
        .content-empty i { font-size: 40px; margin-bottom: 14px; opacity: 0.3; }
        .content-empty h3 { font-size: 17px; font-weight: 500; color: var(--text-secondary); margin-bottom: 4px; }
        .content-empty p { font-size: 13px; max-width: 400px; line-height: 1.6; }
        .toast-container { position: fixed; bottom: 24px; right: 24px; z-index: 999; display: flex; flex-direction: column; gap: 8px; max-width: 360px; width: 100%; }
        .toast { padding: 12px 18px; border-radius: var(--radius-sm); background: var(--bg-card); border: 1px solid var(--border); box-shadow: var(--shadow); font-size: 13px; color: var(--text); display: flex; align-items: center; gap: 10px; animation: slideUp 0.3s ease; transition: all var(--transition); }
        .toast.error { border-left: 4px solid #dc2626; }
        .toast.success { border-left: 4px solid #22c55e; }
        .toast.info { border-left: 4px solid var(--primary); }
        .toast .toast-icon { font-size: 16px; flex-shrink: 0; }
        .toast .toast-close { background: none; border: none; color: var(--text-muted); cursor: pointer; font-size: 14px; margin-left: auto; padding: 0 4px; }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .spinner { display: inline-block; width: 18px; height: 18px; border: 2px solid var(--border); border-top-color: var(--primary); border-radius: 50%; animation: spin 0.6s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .loading-message { display: flex; align-items: center; justify-content: center; padding: 40px 20px; gap: 12px; color: var(--text-secondary); font-size: 14px; }
        .loading-message .spinner { width: 22px; height: 22px; }
        .data-notice { background: var(--bg-active); color: var(--primary); padding: 6px 16px; font-size: 11px; border-top: 1px solid var(--border); text-align: center; flex-shrink: 0; }
        .data-notice i { margin-right: 6px; }
        .data-notice code { background: var(--bg-card); padding: 1px 8px; border-radius: 3px; font-size: 10px; border: 1px solid var(--border); }
        
        /* ====== FULLSCREEN BUTTONS & PLAYER ====== */
        #fullscreenButtons { position: fixed; top: 20px; left: 0; right: 0; z-index: 10000; padding: 0 20px; pointer-events: none; opacity: 0; transition: opacity 0.25s ease 0.05s; }
        #fullscreenButtons.active { opacity: 1; }
        #fullscreenButtons.closing { opacity: 0; transition: opacity 0.15s ease; }
        
        #fullscreenButtons .btn-row { max-width: 1000px; margin: 0 auto; display: flex; justify-content: space-between; align-items: flex-start; pointer-events: auto; gap: 12px; flex-wrap: wrap; }
        
        #fullscreenButtons .btn-group { display: flex; gap: 8px; row-gap: 12px; align-items: center; flex-wrap: wrap; justify-content: flex-end; flex: 1; }
        
        #fullscreenButtons .close-btn { background: var(--bg-card); border: 1px solid var(--border); border-radius: 50%; width: 46px; height: 46px; font-size: 22px; display: flex; align-items: center; justify-content: center; cursor: pointer; color: var(--text); box-shadow: var(--shadow); transition: all var(--transition); border: none; flex-shrink: 0; }
        #fullscreenButtons .close-btn:hover { background: var(--bg-hover); transform: scale(1.04); }
        
        #fullscreenButtons .translate-btn-wrapper,
        #fullscreenButtons .tts-btn-wrapper { position: relative; pointer-events: auto; flex-shrink: 0; }
        
        #fullscreenButtons .translate-btn-wrapper .translate-btn,
        #fullscreenButtons .tts-btn-wrapper .tts-btn { background: var(--bg-card); border: 1px solid var(--border); border-radius: 30px; padding: 0 18px; height: 46px; display: flex; align-items: center; gap: 8px; cursor: pointer; color: var(--text); box-shadow: var(--shadow); transition: all var(--transition); border: none; font-size: 14px; font-family: var(--font); font-weight: 500; white-space: nowrap; }
        
        #fullscreenButtons .translate-btn-wrapper .translate-btn:hover,
        #fullscreenButtons .tts-btn-wrapper .tts-btn:hover { background: var(--bg-hover); transform: scale(1.03); }
        #fullscreenButtons .translate-btn-wrapper .translate-btn i,
        #fullscreenButtons .tts-btn-wrapper .tts-btn i { font-size: 17px; }
        
        #fullscreenButtons .translate-dropdown { position: absolute; top: 54px; right: 0; background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-sm); box-shadow: var(--shadow); min-width: 120px; display: none; overflow: hidden; z-index: 10002; }
        #fullscreenButtons .translate-dropdown.active { display: block; }
        #fullscreenButtons .translate-dropdown .dropdown-item { padding: 8px 16px; cursor: pointer; transition: background var(--transition); font-size: 13px; color: var(--text); }
        #fullscreenButtons .translate-dropdown .dropdown-item:hover { background: var(--bg-hover); }
        #fullscreenButtons .translate-dropdown .dropdown-item.active { background: var(--primary-light); color: var(--primary); font-weight: 600; }
        
        #fullscreenButtons .tts-btn-wrapper .tts-btn.playing { background: var(--primary); color: #fff; border-color: var(--primary); }
        #fullscreenButtons .tts-btn-wrapper .tts-btn.playing:hover { background: var(--primary-hover); }

        /* ====== TTS Audio Player (videojs) - Isolated from Global Styles ====== */
        .tts-player-wrapper {
            all: initial;
            display: none;
            box-sizing: border-box;
            width: 100%;
            align-items: center;
            justify-content: flex-end;
            flex-shrink: 0; 
            height: 46px; 
            border-radius: 30px;
            overflow: visible !important;
        }
        .tts-player-wrapper.active {
            display: flex;
        }
        
        .tts-player-wrapper audio-player {
            all: initial;
            display: block;
            box-sizing: border-box;
            width: 320px;
            max-width: 100%;
            height: 100%;
            border-radius: 30px;
            overflow: visible !important;
        }
        
        .tts-player-wrapper audio-player a {
            display: none !important;
        }

        /* Force speed menu to open downwards */
        audio-player::part(menu) {
            top: 100% !important;
            bottom: auto !important;
            margin-top: 8px !important;
        }

        /* FULLSCREEN OVERLAY */
        .fullscreen-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.82); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); z-index: 9999; overflow-y: auto; padding: 80px 20px 40px; opacity: 0; pointer-events: none; transition: opacity 0.3s ease; }
        .fullscreen-overlay.active { opacity: 1; pointer-events: auto; }
        .fullscreen-overlay.closing { opacity: 0; transition: opacity 0.2s ease; }
        .fullscreen-overlay .fullscreen-content { max-width: 820px; margin: 0 auto; background: var(--bg-card); border-radius: var(--radius); padding: 32px 36px; border: 1px solid var(--border); position: relative; opacity: 0; transform: translateY(18px); transition: opacity 0.3s ease 0.1s, transform 0.3s ease 0.1s; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5); }
        .fullscreen-overlay.active .fullscreen-content { opacity: 1; transform: translateY(0); }
        .fullscreen-overlay.closing .fullscreen-content { opacity: 0; transform: translateY(18px); transition: opacity 0.15s ease, transform 0.15s ease; }
        .fullscreen-overlay .fullscreen-content .entry-title { font-size: 24px; font-weight: 600; margin-bottom: 10px; color: var(--text); line-height: 1.3; }
        .fullscreen-overlay .fullscreen-content .entry-meta { font-size: 13px; color: var(--text-muted); margin-bottom: 18px; display: flex; flex-wrap: wrap; gap: 14px; }
        .fullscreen-overlay .fullscreen-content .entry-meta a { color: var(--primary); text-decoration: none; }
        .fullscreen-overlay .fullscreen-content .entry-meta a:hover { text-decoration: underline; }
        .fullscreen-overlay .fullscreen-content .entry-desc { font-size: 15px; line-height: 1.8; color: var(--text-secondary); }
        .fullscreen-overlay .fullscreen-content .entry-desc img { max-width: 100%; border-radius: 6px; margin: 12px 0; }
        .fullscreen-overlay .fullscreen-content .entry-desc p { margin: 8px 0; }
        .fullscreen-overlay .fullscreen-content .entry-image { margin: 10px 0 16px 0; border-radius: 6px; overflow: hidden; max-height: 500px; display: flex; align-items: center; justify-content: center; background: var(--bg); }
        .fullscreen-overlay .fullscreen-content .entry-image img { max-width: 100%; max-height: 500px; object-fit: contain; display: block; }
        
        @media (max-width: 900px) {
            .app { flex-direction: column; padding: 12px 12px 16px; gap: 12px; }
            .sidebar { width: 100%; min-width: unset; max-height: 320px; position: static; top: unset; }
            .content { max-height: unset; min-height: 500px; }
            .header { padding: 0 16px; }
            .header-logo { font-size: 17px; }
            .content-header { padding: 12px 16px; flex-direction: column; align-items: stretch; gap: 8px; }
            .content-header .feed-title-large { font-size: 15px; }
            .sidebar-add .add-form { flex-wrap: wrap; }
            .sidebar-add .add-form input { flex: 1 1 100%; }
            .fullscreen-overlay .fullscreen-content { padding: 20px 18px; }
            .fullscreen-overlay .fullscreen-content .entry-title { font-size: 20px; }
            #fullscreenButtons { top: 14px; padding: 0 14px; }
            #fullscreenButtons .close-btn { width: 40px; height: 40px; font-size: 18px; }
            #fullscreenButtons .translate-btn-wrapper .translate-btn,
            #fullscreenButtons .tts-btn-wrapper .tts-btn { height: 40px; padding: 0 14px; font-size: 13px; }
            #fullscreenButtons .translate-btn-wrapper .translate-btn i,
            #fullscreenButtons .tts-btn-wrapper .tts-btn i { font-size: 15px; }
            
            .tts-player-wrapper { height: 40px; }
            .tts-player-wrapper audio-player { width: 280px; }
        }
        
        @media (max-width: 480px) {
            .header-logo span { display: none; }
            .header-actions .btn-icon { width: 32px; height: 32px; font-size: 13px; }
            .entry-card { padding: 12px 14px; }
            .entry-card .entry-title { font-size: 14px; }
            .toast-container { left: 12px; right: 12px; max-width: unset; bottom: 12px; }
            .content-header .feed-actions button { font-size: 10px; padding: 4px 8px; }
            .fullscreen-overlay { padding: 70px 10px 20px; }
            .fullscreen-overlay .fullscreen-content { padding: 16px 14px; }
            .fullscreen-overlay .fullscreen-content .entry-title { font-size: 17px; }
            #fullscreenButtons { top: 10px; padding: 0 10px; }
            #fullscreenButtons .close-btn { width: 36px; height: 36px; font-size: 16px; }
            #fullscreenButtons .translate-btn-wrapper .translate-btn,
            #fullscreenButtons .tts-btn-wrapper .tts-btn { height: 36px; padding: 0 10px; font-size: 12px; }
            #fullscreenButtons .translate-btn-wrapper .translate-btn i,
            #fullscreenButtons .tts-btn-wrapper .tts-btn i { font-size: 13px; }
            #fullscreenButtons .btn-group { gap: 4px; row-gap: 8px; }
            
            .tts-player-wrapper { height: 36px; }
            .tts-player-wrapper audio-player { width: 100%; max-width: 320px; }
        }
    </style>
    
    <!-- @player-theme-fix -->
    <style>
      html[data-theme="dark"]  audio-player,
      html[data-theme="dark"]  video-player { color-scheme: dark  !important; }

      html[data-theme="light"] audio-player,
      html[data-theme="light"] video-player { color-scheme: light !important; }
    </style>
    
    <!-- @player-buttons-glass -->
    <style>
      /* ─────────── Page header bar — glass ─────────── */
      .header {
        background: oklch(0% 0 0 / .5) !important;
        border-bottom: none !important;
        backdrop-filter: blur(16px) saturate(110%) !important;
        -webkit-backdrop-filter: blur(16px) saturate(110%) !important;
        box-shadow: 0 1px 0 0 oklch(0% 0 0 / .1),
                    0 4px 20px 0 oklch(0% 0 0 / .08) !important;
      }
      html[data-theme="light"] .header {
        background: oklch(100% 0 0 / .65) !important;
        box-shadow: 0 1px 0 0 oklch(0% 0 0 / .05),
                    0 4px 20px 0 oklch(0% 0 0 / .06) !important;
      }

      .header-actions .btn-icon {
        background: oklch(0% 0 0 / .4) !important;
        color: oklch(100% 0 0) !important;
        border: none !important;
        backdrop-filter: blur(16px) saturate(110%) !important;
        -webkit-backdrop-filter: blur(16px) saturate(110%) !important;
        box-shadow: 0 0 0 1px oklch(0% 0 0 / .1),
                    0 1px 3px 0 oklch(0% 0 0 / .15),
                    0 1px 2px -1px oklch(0% 0 0 / .15) !important;
      }
      html[data-theme="light"] .header-actions .btn-icon {
        background: oklch(100% 0 0 / .5) !important;
        color: oklch(0% 0 0) !important;
        box-shadow: 0 0 0 1px oklch(0% 0 0 / .05),
                    0 1px 3px 0 oklch(0% 0 0 / .15),
                    0 1px 2px -1px oklch(0% 0 0 / .15) !important;
      }
      @media (hover: hover) {
        .header-actions .btn-icon:hover {
          background: oklch(0% 0 0 / .5) !important;
          color: oklch(100% 0 0) !important;
        }
        html[data-theme="light"] .header-actions .btn-icon:hover {
          background: oklch(100% 0 0 / .6) !important;
          color: oklch(0% 0 0) !important;
        }
      }
      .header-actions .btn-icon.active {
        background: color-mix(in oklab, var(--primary) 28%, transparent) !important;
        color: var(--primary) !important;
        box-shadow: 0 0 0 1px color-mix(in oklab, var(--primary) 40%, transparent),
                    0 1px 3px 0 oklch(0% 0 0 / .15),
                    0 1px 2px -1px oklch(0% 0 0 / .15) !important;
      }

      /* ─────────── Content pane — glass ─────────── */
      .content {
        background: oklch(0% 0 0 / .45) !important;
        border: none !important;
        backdrop-filter: blur(20px) saturate(120%) !important;
        -webkit-backdrop-filter: blur(20px) saturate(120%) !important;
        box-shadow: 0 0 0 1px oklch(0% 0 0 / .1),
                    0 8px 32px 0 oklch(0% 0 0 / .2) !important;
      }
      html[data-theme="light"] .content {
        background: oklch(100% 0 0 / .55) !important;
        box-shadow: 0 0 0 1px oklch(0% 0 0 / .05),
                    0 8px 32px 0 oklch(0% 0 0 / .08) !important;
      }

      /* ─────────── Sidebar — glass (same as .content) ─────────── */
      .sidebar {
        background: oklch(0% 0 0 / .45) !important;
        border: none !important;
        backdrop-filter: blur(20px) saturate(120%) !important;
        -webkit-backdrop-filter: blur(20px) saturate(120%) !important;
        box-shadow: 0 0 0 1px oklch(0% 0 0 / .1),
                    0 8px 32px 0 oklch(0% 0 0 / .2) !important;
      }
      html[data-theme="light"] .sidebar {
        background: oklch(100% 0 0 / .55) !important;
        box-shadow: 0 0 0 1px oklch(0% 0 0 / .05),
                    0 8px 32px 0 oklch(0% 0 0 / .08) !important;
      }

      /* ─────────── Content-header — glass ─────────── */
      .content-header {
        background: oklch(0% 0 0 / .55) !important;
        border-bottom: none !important;
        box-shadow: 0 1px 0 0 oklch(0% 0 0 / .1) !important;
      }
      html[data-theme="light"] .content-header {
        background: oklch(100% 0 0 / .65) !important;
        box-shadow: 0 1px 0 0 oklch(0% 0 0 / .05) !important;
      }

      /* ─────────── Sidebar-header — glass (same as .content-header) ─────────── */
      .sidebar-header {
        background: oklch(0% 0 0 / .55) !important;
        border-bottom: none !important;
        box-shadow: 0 1px 0 0 oklch(0% 0 0 / .1) !important;
      }
      html[data-theme="light"] .sidebar-header {
        background: oklch(100% 0 0 / .65) !important;
        box-shadow: 0 1px 0 0 oklch(0% 0 0 / .05) !important;
      }

      /* ─────────── Sidebar-add — glass separator ─────────── */
      .sidebar-add {
        border-bottom: none !important;
        box-shadow: 0 1px 0 0 oklch(0% 0 0 / .1) !important;
      }
      html[data-theme="light"] .sidebar-add {
        box-shadow: 0 1px 0 0 oklch(0% 0 0 / .05) !important;
      }

      .content-header .feed-title-large .feed-icon-large {
        background: oklch(0% 0 0 / .35) !important;
        box-shadow: 0 0 0 1px oklch(0% 0 0 / .1),
                    0 1px 2px 0 oklch(0% 0 0 / .12) !important;
      }
      html[data-theme="light"] .content-header .feed-title-large .feed-icon-large {
        background: oklch(100% 0 0 / .45) !important;
        box-shadow: 0 0 0 1px oklch(0% 0 0 / .05),
                    0 1px 2px 0 oklch(0% 0 0 / .08) !important;
      }

      /* ─────────── Content-header action buttons — glass ─────────── */
      .content-header .feed-actions button {
        background: oklch(0% 0 0 / .4) !important;
        color: oklch(100% 0 0) !important;
        border: none !important;
        backdrop-filter: blur(12px) saturate(110%) !important;
        -webkit-backdrop-filter: blur(12px) saturate(110%) !important;
        box-shadow: 0 0 0 1px oklch(0% 0 0 / .1),
                    0 1px 3px 0 oklch(0% 0 0 / .15),
                    0 1px 2px -1px oklch(0% 0 0 / .15) !important;
        text-shadow: 0 1px 0 oklch(0% 0 0 / .15);
      }
      html[data-theme="light"] .content-header .feed-actions button {
        background: oklch(100% 0 0 / .5) !important;
        color: oklch(0% 0 0) !important;
        box-shadow: 0 0 0 1px oklch(0% 0 0 / .05),
                    0 1px 3px 0 oklch(0% 0 0 / .15),
                    0 1px 2px -1px oklch(0% 0 0 / .15) !important;
        text-shadow: 0 1px 0 oklch(100% 0 0 / .4);
      }
      @media (hover: hover) {
        .content-header .feed-actions button:hover {
          background: oklch(0% 0 0 / .5) !important;
        }
        html[data-theme="light"] .content-header .feed-actions button:hover {
          background: oklch(100% 0 0 / .6) !important;
        }
      }
      .content-header .feed-actions button.primary {
        background: color-mix(in oklab, var(--primary) 28%, transparent) !important;
        color: var(--primary) !important;
        box-shadow: 0 0 0 1px color-mix(in oklab, var(--primary) 40%, transparent),
                    0 1px 3px 0 oklch(0% 0 0 / .15),
                    0 1px 2px -1px oklch(0% 0 0 / .15) !important;
      }
      @media (hover: hover) {
        .content-header .feed-actions button.primary:hover {
          background: color-mix(in oklab, var(--primary) 40%, transparent) !important;
        }
      }

      /* ═══════════════════════════════════════════════════════════════
       *   DESKTOP-ONLY: make .content-header a real sticky glass bar
       * ═══════════════════════════════════════════════════════════════ */
      @media (min-width: 901px) {
        .content {
          overflow-y: auto !important;
          overflow-x: hidden !important;
        }
        .content-header {
          position: sticky !important;
          top: 0 !important;
          z-index: 10 !important;
          backdrop-filter: blur(20px) saturate(120%) !important;
          -webkit-backdrop-filter: blur(20px) saturate(120%) !important;
        }
        .content-items {
          flex: initial !important;
          overflow: visible !important;
        }
      }

      /* ═══════════════════════════════════════════════════════════════
       *   Entry cards — glass layers on the glass content pane
       * ═══════════════════════════════════════════════════════════════ */
      .entry-card {
        background: oklch(0% 0 0 / .4) !important;
        border: none !important;
        box-shadow: 0 0 0 1px oklch(0% 0 0 / .1) !important;
      }
      html[data-theme="light"] .entry-card {
        background: oklch(100% 0 0 / .55) !important;
        box-shadow: 0 0 0 1px oklch(0% 0 0 / .05) !important;
      }
      .entry-card:hover {
        box-shadow: 0 0 0 1px var(--primary),
                    0 4px 20px color-mix(in oklab, var(--primary) 22%, transparent) !important;
      }
      .entry-card.read {
        opacity: .55 !important;
      }

      /* ─────────── Feed items — glass (same as .entry-card) ─────────── */
      .feed-item {
        background: oklch(0% 0 0 / .4) !important;
        border: none !important;
        border-left: 3px solid transparent !important;
        box-shadow: 0 0 0 1px oklch(0% 0 0 / .1) !important;
      }
      html[data-theme="light"] .feed-item {
        background: oklch(100% 0 0 / .55) !important;
        box-shadow: 0 0 0 1px oklch(0% 0 0 / .05) !important;
      }
      .feed-item:hover {
        background: oklch(0% 0 0 / .45) !important;
        box-shadow: 0 0 0 1px var(--primary),
                    0 4px 20px color-mix(in oklab, var(--primary) 22%, transparent) !important;
      }
      html[data-theme="light"] .feed-item:hover {
        background: oklch(100% 0 0 / .65) !important;
      }
      .feed-item.active {
        background: var(--bg-active) !important;
        border-left-color: var(--primary) !important;
        box-shadow: 0 0 0 1px color-mix(in oklab, var(--primary) 40%, transparent) !important;
      }

      /* CYAN buttons inside cards — fullscreen + mark-read */
      .entry-card .entry-actions button.fullscreen-btn,
      .entry-card .entry-actions button.mark-read {
        color: var(--primary) !important;
        border: 1px solid var(--primary) !important;
        background: color-mix(in oklab, var(--primary) 10%, transparent) !important;
        box-shadow: none !important;
      }
      @media (hover: hover) {
        .entry-card .entry-actions button.fullscreen-btn:hover,
        .entry-card .entry-actions button.mark-read:hover {
          background: color-mix(in oklab, var(--primary) 22%, transparent) !important;
        }
      }
      .entry-card .entry-actions button:not(.fullscreen-btn):not(.mark-read) {
        background: oklch(0% 0 0 / .35) !important;
        color: oklch(100% 0 0) !important;
        border: none !important;
        box-shadow: 0 0 0 1px oklch(0% 0 0 / .1) !important;
      }
      html[data-theme="light"] .entry-card .entry-actions button:not(.fullscreen-btn):not(.mark-read) {
        background: oklch(100% 0 0 / .5) !important;
        color: oklch(0% 0 0) !important;
        box-shadow: 0 0 0 1px oklch(0% 0 0 / .05) !important;
      }

      /* Data notice — cyan-tinted glass */
      .data-notice {
        background: color-mix(in oklab, var(--primary) 8%, transparent) !important;
        color: var(--primary) !important;
        border-top: 1px solid color-mix(in oklab, var(--primary) 18%, transparent) !important;
      }

      /* ─────────── Translate button — neutral glass ─────────── */
      #fullscreenButtons .translate-btn-wrapper .translate-btn {
        background: oklch(0% 0 0 / .4) !important;
        color: oklch(100% 0 0) !important;
        border: none !important;
        backdrop-filter: blur(16px) saturate(110%) !important;
        -webkit-backdrop-filter: blur(16px) saturate(110%) !important;
        box-shadow: 0 0 0 1px oklch(0% 0 0 / .1),
                    0 1px 3px 0 oklch(0% 0 0 / .15),
                    0 1px 2px -1px oklch(0% 0 0 / .15) !important;
        text-shadow: 0 1px 0 oklch(0% 0 0 / .15);
      }
      html[data-theme="light"] #fullscreenButtons .translate-btn-wrapper .translate-btn {
        background: oklch(100% 0 0 / .5) !important;
        color: oklch(0% 0 0) !important;
        box-shadow: 0 0 0 1px oklch(0% 0 0 / .05),
                    0 1px 3px 0 oklch(0% 0 0 / .15),
                    0 1px 2px -1px oklch(0% 0 0 / .15) !important;
        text-shadow: 0 1px 0 oklch(100% 0 0 / .4);
      }
      @media (hover: hover) {
        #fullscreenButtons .translate-btn-wrapper .translate-btn:hover {
          background: oklch(0% 0 0 / .5) !important; transform: scale(1.03);
        }
        html[data-theme="light"] #fullscreenButtons .translate-btn-wrapper .translate-btn:hover {
          background: oklch(100% 0 0 / .6) !important;
        }
      }

      /* ─────────── TTS button — neutral, blue only while playing ─────────── */
      #fullscreenButtons .tts-btn-wrapper .tts-btn {
        background: oklch(0% 0 0 / .4) !important;
        color: oklch(100% 0 0) !important;
        border: none !important;
        backdrop-filter: blur(16px) saturate(110%) !important;
        -webkit-backdrop-filter: blur(16px) saturate(110%) !important;
        box-shadow: 0 0 0 1px oklch(0% 0 0 / .1),
                    0 1px 3px 0 oklch(0% 0 0 / .15),
                    0 1px 2px -1px oklch(0% 0 0 / .15) !important;
        text-shadow: 0 1px 0 oklch(0% 0 0 / .15);
      }
      html[data-theme="light"] #fullscreenButtons .tts-btn-wrapper .tts-btn {
        background: oklch(100% 0 0 / .5) !important;
        color: oklch(0% 0 0) !important;
        box-shadow: 0 0 0 1px oklch(0% 0 0 / .05),
                    0 1px 3px 0 oklch(0% 0 0 / .15),
                    0 1px 2px -1px oklch(0% 0 0 / .15) !important;
        text-shadow: 0 1px 0 oklch(100% 0 0 / .4);
      }
      @media (hover: hover) {
        #fullscreenButtons .tts-btn-wrapper .tts-btn:hover {
          background: oklch(0% 0 0 / .5) !important; transform: scale(1.03);
        }
        html[data-theme="light"] #fullscreenButtons .tts-btn-wrapper .tts-btn:hover {
          background: oklch(100% 0 0 / .6) !important;
        }
      }
      #fullscreenButtons .tts-btn-wrapper .tts-btn.playing {
        background: color-mix(in oklab, var(--primary) 82%, transparent) !important;
        color: oklch(100% 0 0) !important;
        backdrop-filter: blur(16px) saturate(110%) !important;
        -webkit-backdrop-filter: blur(16px) saturate(110%) !important;
        box-shadow: 0 0 0 1px color-mix(in oklab, var(--primary) 55%, transparent),
                    0 1px 3px 0 oklch(0% 0 0 / .2),
                    0 1px 2px -1px oklch(0% 0 0 / .2) !important;
        text-shadow: 0 1px 0 oklch(0% 0 0 / .25);
      }
      @media (hover: hover) {
        #fullscreenButtons .tts-btn-wrapper .tts-btn.playing:hover {
          background: color-mix(in oklab, var(--primary) 92%, transparent) !important;
          transform: none;
        }
      }

      /* ─────────── Translate dropdown — glass menu ─────────── */
      #fullscreenButtons .translate-dropdown {
        background: oklch(0% 0 0 / .4) !important;
        border: none !important;
        border-radius: var(--radius-sm) !important;
        backdrop-filter: blur(16px) saturate(110%) !important;
        -webkit-backdrop-filter: blur(16px) saturate(110%) !important;
        box-shadow: 0 0 0 1px oklch(0% 0 0 / .1),
                    0 1px 3px 0 oklch(0% 0 0 / .15),
                    0 1px 2px -1px oklch(0% 0 0 / .15) !important;
        overflow: hidden !important;
      }
      html[data-theme="light"] #fullscreenButtons .translate-dropdown {
        background: oklch(100% 0 0 / .5) !important;
        box-shadow: 0 0 0 1px oklch(0% 0 0 / .05),
                    0 1px 3px 0 oklch(0% 0 0 / .15),
                    0 1px 2px -1px oklch(0% 0 0 / .15) !important;
      }
      #fullscreenButtons .translate-dropdown .dropdown-item {
        background: transparent !important;
        color: oklch(100% 0 0) !important;
      }
      html[data-theme="light"] #fullscreenButtons .translate-dropdown .dropdown-item {
        color: oklch(0% 0 0) !important;
      }
      @media (hover: hover) {
        #fullscreenButtons .translate-dropdown .dropdown-item:hover {
          background: oklch(0% 0 0 / .15) !important;
        }
        html[data-theme="light"] #fullscreenButtons .translate-dropdown .dropdown-item:hover {
          background: oklch(0% 0 0 / .08) !important;
        }
      }
      #fullscreenButtons .translate-dropdown .dropdown-item.active {
        background: color-mix(in oklab, var(--primary) 28%, transparent) !important;
        color: var(--primary) !important;
        font-weight: 600;
      }

      /* ─────────── Fullscreen overlay — glass background ─────────── */
      .fullscreen-overlay {
        background: oklch(0% 0 0 / .55) !important;
        backdrop-filter: blur(28px) saturate(130%) !important;
        -webkit-backdrop-filter: blur(28px) saturate(130%) !important;
      }
      html[data-theme="light"] .fullscreen-overlay {
        background: oklch(100% 0 0 / .6) !important;
      }
      @supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
        .fullscreen-overlay { background: oklch(0% 0 0 / .92) !important; }
        html[data-theme="light"] .fullscreen-overlay { background: oklch(100% 0 0 / .95) !important; }
      }

      /* ═══════════════════════════════════════════════════════════════
       *   Slow-drifting cyan glow behind the main page
       * ═══════════════════════════════════════════════════════════════ */
      body {
        position: relative;
        isolation: isolate;
      }
      body::before {
        content: "";
        position: fixed;
        top: -15vmax;
        left: -15vmax;
        width: 130vmax;
        height: 130vmax;
        pointer-events: none;
        z-index: -1;
        background: radial-gradient(
          circle at center,
          color-mix(in oklab, var(--primary) 22%, transparent) 0%,
          color-mix(in oklab, var(--primary) 10%, transparent) 22%,
          color-mix(in oklab, var(--primary)  4%, transparent) 42%,
          transparent 62%
        );
        animation: cyan-drift 55s ease-in-out infinite;
        will-change: transform;
        transform: translate3d(0, 0, 0);
      }
      html[data-theme="light"] body::before {
        background: radial-gradient(
          circle at center,
          color-mix(in oklab, var(--primary) 16%, transparent) 0%,
          color-mix(in oklab, var(--primary)  7%, transparent) 22%,
          color-mix(in oklab, var(--primary)  3%, transparent) 42%,
          transparent 62%
        );
      }
      @keyframes cyan-drift {
        0%, 100% { transform: translate3d(-10%,  -6%, 0) scale(1.00); }
        33%      { transform: translate3d( 12%,   8%, 0) scale(1.12); }
        66%      { transform: translate3d( -4%,  14%, 0) scale(1.06); }
      }
      @media (prefers-reduced-motion: reduce) {
        body::before {
          animation: none;
          transform: translate3d(-6%, -4%, 0) scale(1.05);
        }
      }
    </style>

    <!-- =========================================
         Rich Text Styling for Feed Descriptions
         (Overrides the global reset for HTML in feeds)
         ========================================= -->
    <style>
        /* Base container */
        .entry-desc, .entry-desc-preview {
            line-height: 1.7;
            word-break: break-word;
        }

        /* Headings */
        .entry-desc h1, .entry-desc-preview h1 { font-size: 2em !important; font-weight: 700 !important; margin: 0.67em 0 0.4em !important; line-height: 1.2 !important; color: var(--text) !important; }
        .entry-desc h2, .entry-desc-preview h2 { font-size: 1.5em !important; font-weight: 600 !important; margin: 1em 0 0.4em !important; line-height: 1.3 !important; color: var(--text) !important; }
        .entry-desc h3, .entry-desc-preview h3 { font-size: 1.17em !important; font-weight: 600 !important; margin: 1em 0 0.4em !important; color: var(--text) !important; }
        .entry-desc h4, .entry-desc-preview h4 { font-size: 1em !important; font-weight: 600 !important; margin: 1.33em 0 0.4em !important; color: var(--text) !important; }
        .entry-desc h5, .entry-desc-preview h5 { font-size: 0.83em !important; font-weight: 600 !important; margin: 1.67em 0 0.4em !important; color: var(--text) !important; }
        .entry-desc h6, .entry-desc-preview h6 { font-size: 0.67em !important; font-weight: 600 !important; margin: 2.33em 0 0.4em !important; color: var(--text-muted) !important; }

        /* Paragraphs */
        .entry-desc p, .entry-desc-preview p {
            margin: 0 0 1em 0 !important;
        }

        /* Lists */
        .entry-desc ul, .entry-desc-preview ul,
        .entry-desc ol, .entry-desc-preview ol {
            margin: 1em 0 !important;
            padding-left: 2em !important;
        }
        .entry-desc ul, .entry-desc-preview ul { list-style-type: disc !important; }
        .entry-desc ol, .entry-desc-preview ol { list-style-type: decimal !important; }
        .entry-desc li, .entry-desc-preview li {
            margin-bottom: 0.25em !important;
        }

        /* Links */
        .entry-desc a, .entry-desc-preview a {
            color: var(--primary) !important;
            text-decoration: none !important;
        }
        .entry-desc a:hover, .entry-desc-preview a:hover {
            text-decoration: underline !important;
        }

        /* Text formatting */
        .entry-desc strong, .entry-desc-preview strong,
        .entry-desc b, .entry-desc-preview b { font-weight: 600 !important; color: var(--text) !important; }
        .entry-desc em, .entry-desc-preview em,
        .entry-desc i, .entry-desc-preview i { font-style: italic !important; }
        .entry-desc del, .entry-desc-preview del,
        .entry-desc s, .entry-desc-preview s { text-decoration: line-through !important; }
        .entry-desc u, .entry-desc-preview u { text-decoration: underline !important; }
        .entry-desc mark, .entry-desc-preview mark { background-color: var(--primary-light) !important; color: var(--text) !important; padding: 0 2px !important; }

        /* Blockquotes */
        .entry-desc blockquote, .entry-desc-preview blockquote {
            margin: 1em 0 !important;
            padding: 0.5em 1em !important;
            border-left: 4px solid var(--primary) !important;
            background: var(--bg-hover) !important;
            border-radius: 0 var(--radius-sm) var(--radius-sm) 0 !important;
            font-style: italic !important;
            color: var(--text-secondary) !important;
        }

        /* Code blocks */
        .entry-desc code, .entry-desc-preview code {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace !important;
            background: var(--bg-hover) !important;
            padding: 0.2em 0.4em !important;
            border-radius: 4px !important;
            font-size: 0.9em !important;
            color: var(--text) !important;
        }
        .entry-desc pre, .entry-desc-preview pre {
            background: var(--bg-hover) !important;
            padding: 1em !important;
            border-radius: var(--radius-sm) !important;
            overflow-x: auto !important;
            margin: 1em 0 !important;
            border: 1px solid var(--border) !important;
        }
        .entry-desc pre code, .entry-desc-preview pre code {
            background: transparent !important;
            padding: 0 !important;
            border-radius: 0 !important;
            font-size: 0.85em !important;
            border: none !important;
        }

        /* Tables */
        .entry-desc table, .entry-desc-preview table {
            border-collapse: collapse !important;
            width: 100% !important;
            margin: 1em 0 !important;
            font-size: 0.9em !important;
            display: block !important;
            overflow-x: auto !important;
            -webkit-overflow-scrolling: touch;
        }
        .entry-desc th, .entry-desc-preview th,
        .entry-desc td, .entry-desc-preview td {
            border: 1px solid var(--border) !important;
            padding: 0.5em 0.75em !important;
            text-align: left !important;
        }
        .entry-desc th, .entry-desc-preview th {
            background: var(--bg-hover) !important;
            font-weight: 600 !important;
            color: var(--text) !important;
        }

        /* Horizontal Rules */
        .entry-desc hr, .entry-desc-preview hr {
            border: none !important;
            border-top: 1px solid var(--border) !important;
            margin: 1.5em 0 !important;
        }

        /* Images */
        .entry-desc img, .entry-desc-preview img {
            max-width: 100% !important;
            height: auto !important;
            border-radius: 6px !important;
            margin: 0.5em 0 !important;
            display: block !important;
        }

        /* Small mobile scaling for headings */
        @media (max-width: 480px) {
            .entry-desc h1 { font-size: 1.5em !important; }
            .entry-desc h2 { font-size: 1.3em !important; }
            .entry-desc h3 { font-size: 1.1em !important; }
        }
    </style>
</head>
<body>
    <header class="header">
        <div class="header-left">
            <div class="header-logo"><i class="fas fa-rss"></i> Feed<span>Reader</span></div>
        </div>
        <div class="header-actions">
            <button class="btn-icon" id="themeToggle" title="Toggle theme"><i class="fas fa-moon"></i></button>
            <button class="btn-icon" id="refreshAllBtn" title="Refresh all feeds"><i class="fas fa-sync-alt"></i></button>
        </div>
    </header>
    <div class="app">
        <aside class="sidebar" id="sidebar">
            <div class="sidebar-header"><h2><i class="fas fa-list-ul" style="margin-right:6px;"></i> Your Feeds</h2><span class="badge" id="feedCount">0</span></div>
            <div class="sidebar-add">
                <form class="add-form" id="addFeedForm">
                    <input type="url" id="feedUrlInput" placeholder="Paste JSON feed URL…" required />
                    <button type="submit" id="addFeedBtn"><i class="fas fa-plus"></i> Add</button>
                </form>
            </div>
            <div class="sidebar-feed-list" id="feedList"><div class="sidebar-empty"><i class="fas fa-rss"></i><p>No feeds yet.<br />Add one above to get started.</p></div></div>
        </aside>
        <main class="content" id="content">
            <div class="content-header">
                <div class="feed-title-large" id="contentFeedTitle"><span class="feed-icon-large" id="contentFeedIcon"><i class="fas fa-rss"></i></span><span id="contentFeedName">Loading feed…</span></div>
                <div class="feed-meta" id="contentFeedMeta"><span id="entryCount">0 items</span></div>
                <div class="feed-actions">
                    <button id="markAllReadBtn" title="Mark all as read"><i class="fas fa-check-double"></i> Mark all read</button>
                    <button id="refreshFeedBtn" class="primary" title="Refresh this feed"><i class="fas fa-sync-alt"></i> Refresh</button>
                </div>
            </div>
            <div class="content-items" id="contentItems">
                <div class="loading-message">
                    <span class="spinner"></span>
                    <span>Loading feed list from feeds.json…</span>
                </div>
            </div>
            <div class="data-notice"><i class="fas fa-file-code"></i> Click any card to open fullscreen view</div>
        </main>
    </div>
    <div class="toast-container" id="toastContainer"></div>
    <script>
        (function() {
            'use strict';

            // ====== FEEDS.JSON URL (single source of feed definitions) ======
            const FEEDS_JSON_URL = 'https://raw.githubusercontent.com/loserbadbakht-wq/shs/refs/heads/main/feeds.json';

            // ---- References ----
            const feedListEl = document.getElementById('feedList');
            const contentItemsEl = document.getElementById('contentItems');
            const contentFeedName = document.getElementById('contentFeedName');
            const contentFeedIcon = document.getElementById('contentFeedIcon');
            const contentFeedMeta = document.getElementById('contentFeedMeta');
            const entryCountEl = document.getElementById('entryCount');
            const feedCountEl = document.getElementById('feedCount');
            const addForm = document.getElementById('addFeedForm');
            const feedUrlInput = document.getElementById('feedUrlInput');
            const addBtn = document.getElementById('addFeedBtn');
            const themeToggle = document.getElementById('themeToggle');
            const refreshAllBtn = document.getElementById('refreshAllBtn');
            const refreshFeedBtn = document.getElementById('refreshFeedBtn');
            const markAllReadBtn = document.getElementById('markAllReadBtn');
            const toastContainer = document.getElementById('toastContainer');

            // ---- State ----
            let feeds = [];
            let activeFeedId = null;
            let isLoading = false;
            let currentOverlay = null;
            let currentButtons = null;

            // ---- Helpers ----
            function generateId() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }

            function timeAgo(date) {
                const diff = Date.now() - new Date(date).getTime();
                const mins = Math.floor(diff / 60000);
                if (mins < 1) return 'Just now';
                if (mins < 60) return mins + 'm ago';
                const hrs = Math.floor(mins / 60);
                if (hrs < 24) return hrs + 'h ago';
                const days = Math.floor(hrs / 24);
                if (days < 7) return days + 'd ago';
                return new Date(date).toLocaleDateString();
            }

            function getDomain(url) {
                try { const u = new URL(url); return u.hostname.replace(/^www\./, ''); } catch { return url; }
            }

            function getFavicon(url) {
                try { const u = new URL(url); return `https://www.google.com/s2/favicons?domain=${u.hostname}&sz=32`; } catch { return ''; }
            }

            // ---- Image extraction – only from description (fallback) ----
            function extractImage(description) {
                if (!description) return null;
                const imgMatch = description.match(/<img[^>]+src=(["'])(.*?)\1/i);
                if (imgMatch && imgMatch[2]) {
                    return imgMatch[2];
                }
                const urlMatch = description.match(/https?:\/\/[^\s<>]+\.(?:jpg|jpeg|png|gif|webp|svg)/i);
                if (urlMatch) {
                    return urlMatch[0];
                }
                return null;
            }

            function stripHtml(html) {
                const tmp = document.createElement('div');
                tmp.innerHTML = html;
                return tmp.textContent || tmp.innerText || '';
            }

            // ---- Toast ----
            function showToast(message, type = 'info', duration) {
                if (!duration) duration = type === 'error' ? 10000 : 5000;
                const icons = { success: 'fa-check-circle', error: 'fa-exclamation-circle', info: 'fa-info-circle' };
                const toast = document.createElement('div');
                toast.className = `toast ${type}`;
                toast.innerHTML = `
                    <span class="toast-icon"><i class="fas ${icons[type] || icons.info}"></i></span>
                    <span>${message}</span>
                    <button class="toast-close"><i class="fas fa-times"></i></button>
                `;
                toast.querySelector('.toast-close').addEventListener('click', () => toast.remove());
                toastContainer.appendChild(toast);
                setTimeout(() => { if (toast.parentNode) toast.remove(); }, duration);
            }

            // ---- Theme ----
            function getTheme() {
                return localStorage.getItem('fr-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' :
                    'light');
            }

            function setTheme(theme) {
                document.documentElement.setAttribute('data-theme', theme);
                localStorage.setItem('fr-theme', theme);
                const icon = themeToggle.querySelector('i');
                icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
            }
            themeToggle.addEventListener('click', () => {
                const current = document.documentElement.getAttribute('data-theme');
                setTheme(current === 'dark' ? 'light' : 'dark');
            });
            setTheme(getTheme());

            // ---- LocalStorage ----
            function saveFeeds() { try { localStorage.setItem('fr-feeds', JSON.stringify(feeds)); } catch (e) {} }

            function loadFeeds() {
                try {
                    const data = localStorage.getItem('fr-feeds');
                    if (data) {
                        const parsed = JSON.parse(data);
                        if (Array.isArray(parsed) && parsed.length > 0) {
                            feeds = parsed;
                            feeds.forEach(f => {
                                if (!f.items) f.items = [];
                                f.items.forEach(i => { if (i.read === undefined) i.read = false; });
                            });
                            return true;
                        }
                    }
                } catch (e) {}
                return false;
            }

            // ---- Load feed definitions from feeds.json (NO fallback) ----
            async function loadFeedDefinitions() {
                const res = await fetch(FEEDS_JSON_URL, { cache: 'no-store' });
                if (!res.ok) throw new Error(`HTTP ${res.status} – ${res.statusText}`);
                const data = await res.json();
                if (!Array.isArray(data)) {
                    throw new Error('feeds.json must be a JSON array');
                }
                const valid = data.filter(f => f && typeof f.url === 'string' && f.url.trim());
                if (valid.length === 0) {
                    throw new Error('feeds.json contains no valid feed URLs');
                }
                console.log(`📋 Loaded ${valid.length} feed definition(s) from feeds.json`);
                return valid;
            }

            // ---- Parse JSON feed – includes `image` and `tts` fields ----
            function parseJsonFeed(data, url) {
                let feedData;
                if (data.rss && data.rss.channel) {
                    const channel = data.rss.channel;
                    feedData = {
                        feed: {
                            title: channel.title || 'Feed',
                            url: channel.link || url,
                            image: channel.image || ''
                        },
                        items: (channel.item || []).map(item => ({
                            title: item.title || 'Untitled',
                            link: item.link || '#',
                            image: item.image || '',
                            tts: item.tts || '',
                            description: item.description || '',
                            pubDate: item.pubDate || new Date().toISOString()
                        }))
                    };
                } else if (data.feed && data.items) {
                    feedData = {
                        feed: {
                            title: data.feed.title || 'Feed',
                            url: data.feed.url || url,
                            image: data.feed.image || data.feed.icon || ''
                        },
                        items: (data.items || []).map(item => ({
                            title: item.title || 'Untitled',
                            link: item.link || '#',
                            image: item.image || '',
                            tts: item.tts || '',
                            description: item.description || item.content || '',
                            pubDate: item.pubDate || new Date().toISOString()
                        }))
                    };
                } else if (data.status === 'ok' && data.feed) {
                    feedData = {
                        feed: {
                            title: data.feed.title || 'Feed',
                            url: data.feed.url || url,
                            image: data.feed.image || ''
                        },
                        items: (data.items || []).map(item => ({
                            title: item.title || 'Untitled',
                            link: item.link || '#',
                            image: item.image || '',
                            tts: item.tts || '',
                            description: item.description || item.content || '',
                            pubDate: item.pubDate || new Date().toISOString()
                        }))
                    };
                } else if (Array.isArray(data) && data.length > 0 && data[0].feedTitle) {
                    feedData = {
                        feed: {
                            title: data[0].feedTitle || 'Feed',
                            url: data[0].feedUrl || url,
                            image: data[0].feedIcon || ''
                        },
                        items: data.map(item => ({
                            title: item.title || 'Untitled',
                            link: item.link || '#',
                            image: item.image || '',
                            tts: item.tts || '',
                            description: item.description || '',
                            pubDate: item.pubDate || new Date().toISOString()
                        }))
                    };
                } else {
                    throw new Error('Unrecognised JSON format.');
                }
                return {
                    title: feedData.feed.title || 'Feed',
                    icon: feedData.feed.image || '', 
                    items: (feedData.items || []).map(item => ({
                        id: generateId(),
                        title: item.title || 'Untitled',
                        link: item.link || '#',
                        image: item.image || '',
                        tts: item.tts || '',
                        description: item.description || '',
                        pubDate: item.pubDate || new Date().toISOString(),
                        read: false,
                    }))
                };
            }

            // ---- Load a single feed from a JSON URL ----
            async function loadFeedFromJson(url) {
                const response = await fetch(url);
                if (!response.ok) throw new Error(`HTTP ${response.status} – ${response.statusText}`);
                const data = await response.json();
                return parseJsonFeed(data, url);
            }

            // ---- Wait for videojs audio-player custom element to be defined ----
            async function waitForAudioPlayer(timeout = 5000) {
                if (customElements.get('audio-player')) return;
                const start = Date.now();
                while (!customElements.get('audio-player')) {
                    if (Date.now() - start > timeout) {
                        throw new Error('Audio player failed to load');
                    }
                    await new Promise(r => setTimeout(r, 100));
                }
            }

            // ---- Add Feed (manual) ----
            async function addFeed(url) {
                url = url.trim();
                if (!url) return;
                if (feeds.some(f => f.url.toLowerCase() === url.toLowerCase())) {
                    showToast('Feed already exists.', 'error');
                    return;
                }
                addBtn.disabled = true;
                addBtn.innerHTML = '<span class="spinner" style="width:16px;height:16px;"></span>';
                try {
                    const feedData = await loadFeedFromJson(url);
                    const feed = {
                        id: generateId(),
                        url: url,
                        title: feedData.title || 'Feed',
                        icon: feedData.icon || getFavicon(url),
                        items: feedData.items || [],
                        hasTranslation: false
                    };
                    feeds.push(feed);
                    saveFeeds();
                    renderFeeds();
                    selectFeed(feed.id);
                    showToast(`Added "${feed.title}" with ${feed.items.length} items.`, 'success');
                    feedUrlInput.value = '';
                } catch (err) {
                    showToast(`Failed to add feed: ${err.message}`, 'error');
                } finally {
                    addBtn.disabled = false;
                    addBtn.innerHTML = '<i class="fas fa-plus"></i> Add';
                }
            }

            // ---- Refresh Feed ----
            async function refreshFeed(id) {
                const feed = feeds.find(f => f.id === id);
                if (!feed) return;
                isLoading = true;
                refreshFeedBtn.disabled = true;
                refreshFeedBtn.innerHTML = '<span class="spinner" style="width:16px;height:16px;"></span>';
                try {
                    const data = await loadFeedFromJson(feed.url);
                    feed.title = data.title || feed.title;
                    feed.icon = data.icon || feed.icon || getFavicon(feed.url);
                    const existingLinks = new Set(feed.items.map(i => i.link));
                    let newCount = 0;
                    (data.items || []).forEach(item => {
                        if (!existingLinks.has(item.link)) {
                            feed.items.unshift({
                                id: generateId(),
                                title: item.title || 'Untitled',
                                link: item.link || '#',
                                image: item.image || '',
                                tts: item.tts || '',
                                description: item.description || '',
                                pubDate: item.pubDate || new Date().toISOString(),
                                read: false,
                            });
                            newCount++;
                            existingLinks.add(item.link);
                        }
                    });
                    feed.items.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
                    saveFeeds();
                    renderFeeds();
                    if (activeFeedId === feed.id) renderItems(feed);
                    showToast(`Refreshed "${feed.title}" — ${newCount} new item${newCount !== 1 ? 's' : ''}.`, 'success');
                } catch (err) {
                    showToast(`Failed to refresh: ${err.message}`, 'error');
                } finally {
                    isLoading = false;
                    refreshFeedBtn.disabled = false;
                    refreshFeedBtn.innerHTML = '<i class="fas fa-sync-alt"></i> Refresh';
                }
            }

            // ---- Init – ONLY uses feeds.json, no fallback ----
            async function initFeed() {
                if (loadFeeds() && feeds.length > 0) {
                    console.log('📡 Loaded feeds from localStorage:', feeds.length);
                    activeFeedId = feeds[0].id;
                    renderFeeds();
                    renderItems(feeds[0]);
                    showToast(`Loaded ${feeds.length} feed(s) from localStorage`, 'success', 3000);
                    return;
                }

                try {
                    contentItemsEl.innerHTML =
                        `<div class="loading-message"><span class="spinner"></span> Loading feed list from feeds.json…</div>`;

                    const feedDefs = await loadFeedDefinitions();

                    contentItemsEl.innerHTML =
                        `<div class="loading-message"><span class="spinner"></span> Loading ${feedDefs.length} feed(s)…</div>`;

                    const loadedFeeds = [];
                    for (const def of feedDefs) {
                        try {
                            const feedData = await loadFeedFromJson(def.url);
                            const feed = {
                                id: generateId(),
                                url: def.url,
                                url_en: def.url_en || def.url,
                                url_fa: def.url_fa || def.url,
                                title: feedData.title || def.title || 'Feed',
                                icon: def.icon || feedData.icon || getFavicon(def.url),
                                items: feedData.items || [],
                                hasTranslation: !!(def.url_en && def.url_fa)
                            };
                            loadedFeeds.push(feed);
                            console.log(`✅ Loaded: ${feed.title} (${feed.items.length} items)`);
                        } catch (err) {
                            console.warn(`❌ Failed to load ${def.url}:`, err.message);
                            showToast(`Failed to load "${def.title || def.url}": ${err.message}`, 'error', 5000);
                        }
                    }

                    if (loadedFeeds.length === 0) {
                        throw new Error('No feeds could be loaded from feeds.json.');
                    }

                    feeds = loadedFeeds;
                    saveFeeds();
                    activeFeedId = feeds[0].id;
                    renderFeeds();
                    renderItems(feeds[0]);
                    showToast(`Loaded ${feeds.length} feed(s) with ${feeds.reduce((sum, f) => sum + f.items.length, 0)} total items`,
                        'success', 4000);
                } catch (err) {
                    console.error(err);
                    feeds = [];
                    renderFeeds();
                    renderContentEmpty(
                        'Could not load feeds.json',
                        `${err.message} — Make sure feeds.json exists and contains a JSON array of feed definitions. You can still add feeds manually using the sidebar input.`
                    );
                    showToast(`Failed to load feeds.json: ${err.message}`, 'error', 10000);
                }
            }

            // ---- Select Feed ----
            function selectFeed(id) {
                activeFeedId = id;
                const feed = feeds.find(f => f.id === id);
                if (!feed) {
                    renderContentEmpty('Feed not found', 'Please select another feed.');
                    renderFeeds();
                    return;
                }
                renderFeeds();
                renderItems(feed);
            }

            // ---- Render Feeds ----
            function renderFeeds() {
                if (feeds.length === 0) {
                    feedListEl.innerHTML =
                    `<div class="sidebar-empty"><i class="fas fa-rss"></i><p>No feeds yet.<br />Add one above to get started.</p></div>`;
                    feedCountEl.textContent = '0';
                    return;
                }
                let html = '';
                feeds.forEach(feed => {
                    const unread = feed.items.filter(i => !i.read).length;
                    const isActive = feed.id === activeFeedId;
                    const iconHtml = feed.icon ? `<img src="${feed.icon}" alt="" loading="lazy" />` :
                        `<i class="fas fa-rss"></i>`;
                    html += `
                        <div class="feed-item ${isActive ? 'active' : ''}" data-id="${feed.id}">
                            <div class="feed-icon">${iconHtml}</div>
                            <div class="feed-info"><div class="feed-title">${feed.title || 'Untitled'}</div><div class="feed-url">${getDomain(feed.url)}</div></div>
                            ${unread > 0 ? `<span class="feed-count">${unread}</span>` : ''}
                            <button class="feed-remove" data-id="${feed.id}" title="Remove feed"><i class="fas fa-times"></i></button>
                        </div>
                    `;
                });
                feedListEl.innerHTML = html;
                feedCountEl.textContent = feeds.length;
                feedListEl.querySelectorAll('.feed-item').forEach(el => {
                    el.addEventListener('click', (e) => {
                        if (e.target.closest('.feed-remove')) return;
                        selectFeed(el.dataset.id);
                    });
                });
                feedListEl.querySelectorAll('.feed-remove').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        removeFeed(btn.dataset.id);
                    });
                });
            }

            // ---- Fullscreen overlay with TTS (videojs player + resume) ----
            function openFullscreen(itemId) {
                let foundItem = null,
                    foundFeed = null;
                for (const feed of feeds) {
                    const item = feed.items.find(i => i.id === itemId);
                    if (item) {
                        foundItem = item;
                        foundFeed = feed;
                        break;
                    }
                }
                if (!foundItem || !foundFeed) return;

                const hasTranslation = !!(foundFeed.url_en && foundFeed.url_fa && foundFeed.hasTranslation !== false);
                const ttsUrl = foundItem.tts || '';
                const hasTts = !!ttsUrl;
                const fullImage = foundItem.image || extractImage(foundItem.description);

                if (currentOverlay) { currentOverlay.remove();
                    currentOverlay = null; }
                if (currentButtons) { currentButtons.remove();
                    currentButtons = null; }

                const overlay = document.createElement('div');
                overlay.className = 'fullscreen-overlay';
                overlay.id = 'fullscreenOverlay';
                overlay.innerHTML = `
                    <div class="fullscreen-content" id="fullscreenContent" dir="ltr">
                        <h1 class="entry-title">${foundItem.title || 'Untitled'}</h1>
                        <div class="entry-meta">
                            <span><i class="fas fa-calendar-alt"></i> ${timeAgo(foundItem.pubDate)}</span>
                            <span><i class="fas fa-link"></i> <a href="${foundItem.link}" target="_blank">Source</a></span>
                            <span><i class="fas fa-rss"></i> ${foundFeed.title}</span>
                        </div>
                        ${fullImage ? `<div class="entry-image"><img src="${fullImage}" alt="Image" /></div>` : ''}
                        <div class="entry-desc">${foundItem.description || 'No description available.'}</div>
                    </div>
                `;
                document.body.appendChild(overlay);
                currentOverlay = overlay;

                const buttons = document.createElement('div');
                buttons.id = 'fullscreenButtons';
                
                // ORDER: Close ... TTS -> Translate -> Player (Player forced to bottom)
                buttons.innerHTML = `
                    <div class="btn-row">
                        <button class="close-btn" id="fullscreenClose"><i class="fas fa-arrow-left"></i></button>
                        <div class="btn-group">
                            ${hasTts ? `
                            <div class="tts-btn-wrapper">
                                <button class="tts-btn" id="ttsBtn" title="Play TTS audio"><i class="fas fa-volume-up"></i> TTS</button>
                            </div>` : ''}
                            
                            <div class="translate-btn-wrapper" id="translateWrapper" style="${hasTranslation ? '' : 'display:none;'}">
                                <button class="translate-btn" id="translateBtn"><i class="fas fa-language"></i> Translate</button>
                                <div class="translate-dropdown" id="translateDropdown">
                                    <div class="dropdown-item" data-lang="en">English</div>
                                    <div class="dropdown-item" data-lang="fa">فارسی</div>
                                </div>
                            </div>
                            
                            ${hasTts ? `
                            <div class="tts-player-wrapper" id="ttsPlayerWrapper"></div>` : ''}
                        </div>
                    </div>
                `;
                document.body.appendChild(buttons);
                currentButtons = buttons;

                void overlay.offsetWidth;
                void buttons.offsetWidth;
                overlay.classList.add('active');
                buttons.classList.add('active');

                let currentLang = 'en';

                // Local TTS state for this overlay instance
                let ttsMediaEl = null;       
                let ttsPlayerWrapper = null; 
                let ttsBtnRef = null;        

                const closeOverlay = () => {
                    if (overlay.classList.contains('closing')) return;

                    // Stop TTS audio (and reset)
                    if (ttsMediaEl) {
                        try {
                            ttsMediaEl.pause();
                            ttsMediaEl.currentTime = 0;
                        } catch (e) {}
                        ttsMediaEl = null;
                    }

                    overlay.classList.remove('active');
                    overlay.classList.add('closing');
                    buttons.classList.remove('active');
                    buttons.classList.add('closing');
                    const onTransitionEnd = (e) => {
                        if (e.target === overlay) {
                            overlay.removeEventListener('transitionend', onTransitionEnd);
                            if (overlay.parentNode) overlay.remove();
                            if (buttons.parentNode) buttons.remove();
                            currentOverlay = null;
                            currentButtons = null;
                        }
                    };
                    overlay.addEventListener('transitionend', onTransitionEnd);
                    setTimeout(() => {
                        if (overlay.parentNode) overlay.remove();
                        if (buttons.parentNode) buttons.remove();
                        currentOverlay = null;
                        currentButtons = null;
                    }, 500);
                };

                const closeBtn = buttons.querySelector('#fullscreenClose');
                closeBtn.addEventListener('click', closeOverlay);
                overlay.addEventListener('click', (e) => { if (e.target === overlay) closeOverlay(); });
                const escHandler = (e) => { if (e.key === 'Escape') { closeOverlay();
                        document.removeEventListener('keydown', escHandler); } };
                document.addEventListener('keydown', escHandler);

                // ---- TTS button + videojs audio player ----
                ttsBtnRef = buttons.querySelector('#ttsBtn');
                ttsPlayerWrapper = buttons.querySelector('#ttsPlayerWrapper');

                if (ttsBtnRef) {
                    ttsBtnRef.addEventListener('click', async (e) => {
                        e.stopPropagation();

                        // If we already have a media element, toggle play/pause on it.
                        if (ttsMediaEl) {
                            if (ttsMediaEl.paused || ttsMediaEl.ended) {
                                // Resume (or restart after ended)
                                try {
                                    if (ttsMediaEl.ended) ttsMediaEl.currentTime = 0;
                                    await ttsMediaEl.play();
                                } catch (err) {
                                    console.warn('TTS resume failed:', err);
                                    if (buttons.isConnected) showToast('Failed to play TTS audio.', 'error');
                                }
                            } else {
                                // Pause
                                ttsMediaEl.pause();
                            }
                            return;
                        }

                        // No player yet – create it and start playing.
                        ttsBtnRef.innerHTML = '<span class="spinner" style="width:16px;height:16px;"></span>';
                        ttsBtnRef.disabled = true;

                        try {
                            await waitForAudioPlayer();
                        } catch (err) {
                            ttsBtnRef.disabled = false;
                            ttsBtnRef.innerHTML = '<i class="fas fa-volume-up"></i> TTS';
                            if (buttons.isConnected) showToast('Audio player failed to load.', 'error');
                            return;
                        }

                        // Build the videojs audio player markup
                        ttsPlayerWrapper.innerHTML = `
                            <audio-player>
                              <audio-skin>
                                <audio src="${ttsUrl}"></audio>
                              </audio-skin>
                            </audio-player>
                        `;
                        
                        // Extract the elements for event binding
                        ttsMediaEl = ttsPlayerWrapper.querySelector('audio');

                        if (!ttsMediaEl) {
                            ttsPlayerWrapper.innerHTML = '';
                            ttsBtnRef.disabled = false;
                            ttsBtnRef.innerHTML = '<i class="fas fa-volume-up"></i> TTS';
                            if (buttons.isConnected) showToast('Failed to create audio player.', 'error');
                            return;
                        }

                        // Sync button / player visibility with playback state
                        ttsMediaEl.addEventListener('play', () => {
                            if (!buttons.isConnected) return;
                            ttsBtnRef.classList.add('playing');
                            ttsBtnRef.innerHTML = '<i class="fas fa-stop"></i> Stop';
                            ttsPlayerWrapper.classList.add('active');
                        });
                        ttsMediaEl.addEventListener('pause', () => {
                            if (!buttons.isConnected) return;
                            ttsBtnRef.classList.remove('playing');
                            ttsBtnRef.innerHTML = '<i class="fas fa-volume-up"></i> TTS';
                            ttsPlayerWrapper.classList.remove('active');
                        });
                        ttsMediaEl.addEventListener('ended', () => {
                            if (!buttons.isConnected) return;
                            ttsBtnRef.classList.remove('playing');
                            ttsBtnRef.innerHTML = '<i class="fas fa-volume-up"></i> TTS';
                            ttsPlayerWrapper.classList.remove('active');
                            try { ttsMediaEl.currentTime = 0; } catch (e) {}
                        });
                        ttsMediaEl.addEventListener('error', () => {
                            if (!buttons.isConnected) return;
                            ttsBtnRef.classList.remove('playing');
                            ttsBtnRef.innerHTML = '<i class="fas fa-volume-up"></i> TTS';
                            ttsPlayerWrapper.classList.remove('active');
                            ttsPlayerWrapper.innerHTML = '';
                            ttsMediaEl = null;
                            showToast('Failed to load TTS audio.', 'error');
                        });

                        try {
                            await ttsMediaEl.play();
                        } catch (err) {
                            console.warn('TTS play failed:', err);
                            if (buttons.isConnected) {
                                ttsBtnRef.classList.remove('playing');
                                ttsBtnRef.innerHTML = '<i class="fas fa-volume-up"></i> TTS';
                                ttsPlayerWrapper.classList.remove('active');
                                ttsPlayerWrapper.innerHTML = '';
                                ttsMediaEl = null;
                                showToast('Failed to play TTS audio.', 'error');
                            }
                        } finally {
                            ttsBtnRef.disabled = false;
                        }
                    });
                }

                // ---- Translation dropdown ----
                const translateBtn = buttons.querySelector('#translateBtn');
                const dropdown = buttons.querySelector('#translateDropdown');
                const contentDiv = overlay.querySelector('#fullscreenContent');

                if (translateBtn) {
                    translateBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        dropdown.classList.toggle('active');
                    });
                    document.addEventListener('click', (e) => {
                        if (!buttons.contains(e.target)) return;
                        if (!e.target.closest('.translate-btn-wrapper')) {
                            dropdown.classList.remove('active');
                        }
                    });

                    dropdown.querySelectorAll('.dropdown-item').forEach(item => {
                        item.addEventListener('click', async (e) => {
                            const lang = item.dataset.lang;
                            if (lang === currentLang) { dropdown.classList.remove('active'); return; }
                            dropdown.querySelectorAll('.dropdown-item').forEach(el => el.classList.remove('active'));
                            item.classList.add('active');
                            dropdown.classList.remove('active');

                            const feedUrl = lang === 'en' ? foundFeed.url_en : foundFeed.url_fa;
                            if (!feedUrl) { showToast('Translation not available for this feed.', 'error'); return; }
                            try {
                                contentDiv.innerHTML =
                                    '<div class="loading-message"><span class="spinner"></span> Loading translation…</div>';
                                const feedData = await loadFeedFromJson(feedUrl);
                                const translatedItem = feedData.items.find(item => item.link === foundItem.link);
                                if (!translatedItem) throw new Error('Translated item not found.');
                                const dir = lang === 'fa' ? 'rtl' : 'ltr';
                                contentDiv.dir = dir;
                                const transImage = translatedItem.image || extractImage(translatedItem.description);
                                contentDiv.innerHTML = `
                                    <h1 class="entry-title">${translatedItem.title || 'Untitled'}</h1>
                                    <div class="entry-meta">
                                        <span><i class="fas fa-calendar-alt"></i> ${timeAgo(translatedItem.pubDate)}</span>
                                        <span><i class="fas fa-link"></i> <a href="${translatedItem.link}" target="_blank">Source</a></span>
                                        <span><i class="fas fa-rss"></i> ${foundFeed.title}</span>
                                    </div>
                                    ${transImage ? `<div class="entry-image"><img src="${transImage}" alt="Image" /></div>` : ''}
                                    <div class="entry-desc">${translatedItem.description || 'No description available.'}</div>
                                `;
                                currentLang = lang;
                            } catch (err) {
                                showToast(`Failed to load translation: ${err.message}`, 'error');
                                const origDesc = foundItem.description;
                                const origTitle = foundItem.title;
                                const origImage = foundItem.image || extractImage(foundItem.description);
                                contentDiv.dir = 'ltr';
                                contentDiv.innerHTML = `
                                    <h1 class="entry-title">${origTitle || 'Untitled'}</h1>
                                    <div class="entry-meta">
                                        <span><i class="fas fa-calendar-alt"></i> ${timeAgo(foundItem.pubDate)}</span>
                                        <span><i class="fas fa-link"></i> <a href="${foundItem.link}" target="_blank">Source</a></span>
                                        <span><i class="fas fa-rss"></i> ${foundFeed.title}</span>
                                    </div>
                                    ${origImage ? `<div class="entry-image"><img src="${origImage}" alt="Image" /></div>` : ''}
                                    <div class="entry-desc">${origDesc || 'No description available.'}</div>
                                `;
                                currentLang = 'en';
                            }
                        });
                    });
                    dropdown.querySelector('.dropdown-item[data-lang="en"]').classList.add('active');
                    currentLang = 'en';
                }
            }

            // ---- Render Items ----
            function renderItems(feed) {
                if (!feed) { renderContentEmpty('No feed selected', 'Choose a feed from the sidebar.'); return; }
                const iconHtml = feed.icon ? `<img src="${feed.icon}" alt="" loading="lazy" />` : `<i class="fas fa-rss"></i>`;
                contentFeedIcon.innerHTML = iconHtml;
                contentFeedName.textContent = feed.title || 'Untitled';
                const total = feed.items.length;
                const unread = feed.items.filter(i => !i.read).length;
                entryCountEl.textContent = `${total} item${total !== 1 ? 's' : ''}${unread > 0 ? ` · ${unread} unread` : ''}`;
                contentFeedMeta.style.display = 'block';
                if (feed.items.length === 0) {
                    contentItemsEl.innerHTML =
                        `<div class="content-empty"><i class="fas fa-newspaper"></i><h3>No articles</h3><p>This feed has no items yet. Try refreshing.</p></div>`;
                    return;
                }
                let html = '';
                feed.items.forEach(item => {
                    const readClass = item.read ? 'read' : '';
                    const date = item.pubDate ? new Date(item.pubDate) : new Date();
                    const dateStr = !isNaN(date.getTime()) ? timeAgo(date) : 'Unknown date';
                    const imageUrl = item.image || extractImage(item.description);
                    const plainPreview = stripHtml(item.description);
                    const previewText = plainPreview.length > 200 ? plainPreview.slice(0, 200) + '…' : plainPreview;
                    html += `
                        <div class="entry-card ${readClass}" data-id="${item.id}">
                            <div class="entry-title"><a href="${item.link}" target="_blank" rel="noopener">${item.title || 'Untitled'}</a></div>
                            <div class="entry-meta">
                                <span class="entry-date"><i class="fas fa-calendar-alt"></i> ${dateStr}</span>
                                <span class="entry-link"><i class="fas fa-external-link-alt"></i> <a href="${item.link}" target="_blank" rel="noopener">Source</a></span>
                            </div>
                            ${imageUrl ? `<div class="entry-image"><img src="${imageUrl}" alt="Image" loading="lazy" /></div>` : ''}
                            <div class="entry-desc-preview">${previewText || 'No description available.'}</div>
                            <div class="entry-actions">
                                <button class="mark-read" data-id="${item.id}">${item.read ? '<i class="fas fa-undo"></i> Mark unread' : '<i class="fas fa-check"></i> Mark read'}</button>
                                <button class="fullscreen-btn" data-id="${item.id}"><i class="fas fa-expand"></i> Fullscreen view</button>
                            </div>
                        </div>
                    `;
                });
                contentItemsEl.innerHTML = html;

                contentItemsEl.querySelectorAll('.entry-card').forEach(card => {
                    card.addEventListener('click', (e) => {
                        if (e.target.closest('button') || e.target.closest('a')) return;
                        const itemId = card.dataset.id;
                        openFullscreen(itemId);
                    });
                });
                contentItemsEl.querySelectorAll('.fullscreen-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const itemId = btn.dataset.id;
                        openFullscreen(itemId);
                    });
                });
                contentItemsEl.querySelectorAll('.mark-read').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const itemId = btn.dataset.id;
                        toggleRead(feed.id, itemId);
                    });
                });
            }

            function renderContentEmpty(title, msg) {
                contentFeedName.textContent = title || 'No feed selected';
                contentFeedIcon.innerHTML = '<i class="fas fa-rss"></i>';
                entryCountEl.textContent = '0 items';
                contentFeedMeta.style.display = 'block';
                contentItemsEl.innerHTML =
                    `<div class="content-empty"><i class="fas fa-inbox"></i><h3>${title || 'No feed selected'}</h3><p>${msg || 'Choose a feed from the sidebar to view its articles.'}</p></div>`;
            }

            function toggleRead(feedId, itemId) {
                const feed = feeds.find(f => f.id === feedId);
                if (!feed) return;
                const item = feed.items.find(i => i.id === itemId);
                if (!item) return;
                item.read = !item.read;
                saveFeeds();
                const active = feeds.find(f => f.id === activeFeedId);
                if (active) renderItems(active);
                renderFeeds();
            }

            function markAllRead() {
                const feed = feeds.find(f => f.id === activeFeedId);
                if (!feed) return;
                feed.items.forEach(item => item.read = true);
                saveFeeds();
                renderItems(feed);
                renderFeeds();
                showToast('All items marked as read.', 'success');
            }

            async function refreshAll() {
                if (feeds.length === 0) { showToast('No feeds to refresh.', 'info'); return; }
                refreshAllBtn.disabled = true;
                refreshAllBtn.innerHTML = '<span class="spinner" style="width:16px;height:16px;"></span>';
                let successCount = 0;
                for (const feed of feeds) {
                    try { await refreshFeed(feed.id);
                        successCount++; } catch (e) {}
                }
                refreshAllBtn.disabled = false;
                refreshAllBtn.innerHTML = '<i class="fas fa-sync-alt"></i>';
                if (successCount > 0) showToast(`Refreshed ${successCount} feed${successCount !== 1 ? 's' : ''}.`, 'success');
                const active = feeds.find(f => f.id === activeFeedId);
                if (active) renderItems(active);
                renderFeeds();
            }

            function removeFeed(id) {
                if (!confirm('Remove this feed?')) return;
                const idx = feeds.findIndex(f => f.id === id);
                if (idx === -1) return;
                feeds.splice(idx, 1);
                saveFeeds();
                if (activeFeedId === id) { activeFeedId = feeds.length > 0 ? feeds[0].id : null; }
                renderFeeds();
                if (activeFeedId) selectFeed(activeFeedId);
                else renderContentEmpty('No feed selected', 'Choose a feed from the sidebar.');
                showToast('Feed removed.', 'info');
            }

            // ---- Event listeners ----
            addForm.addEventListener('submit', (e) => { e.preventDefault();
                addFeed(feedUrlInput.value); });
            refreshFeedBtn.addEventListener('click', () => { if (activeFeedId) refreshFeed(activeFeedId); });
            refreshAllBtn.addEventListener('click', refreshAll);
            markAllReadBtn.addEventListener('click', markAllRead);

            // ---- Init ----
            initFeed();

            document.addEventListener('keydown', (e) => {
                if ((e.metaKey || e.ctrlKey) && e.key === 'r') { e.preventDefault();
                    refreshAll(); }
            });

            console.log('📰 Feed Reader ready – TTS player wrapped below buttons');
        })();
    </script>
</body>
</html>
