// Features Button and Modal Logic

const LANGUAGES = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'hi', name: 'Hindi' },
    { code: 'zh', name: 'Chinese' },
    { code: 'ja', name: 'Japanese' },
    { code: 'ru', name: 'Russian' },
    { code: 'ar', name: 'Arabic' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'it', name: 'Italian' },
    { code: 'ko', name: 'Korean' },
    { code: 'tr', name: 'Turkish' },
    { code: 'bn', name: 'Bengali' },
    { code: 'vi', name: 'Vietnamese' },
    { code: 'id', name: 'Indonesian' },
    { code: 'ms', name: 'Malay' },
    { code: 'th', name: 'Thai' },
    { code: 'fa', name: 'Persian' },
    { code: 'pl', name: 'Polish' },
    { code: 'uk', name: 'Ukrainian' },
    { code: 'nl', name: 'Dutch' },
    { code: 'sv', name: 'Swedish' },
    { code: 'fi', name: 'Finnish' },
    { code: 'no', name: 'Norwegian' },
    { code: 'da', name: 'Danish' },
    { code: 'el', name: 'Greek' },
    { code: 'he', name: 'Hebrew' },
    { code: 'hu', name: 'Hungarian' },
    { code: 'cs', name: 'Czech' },
    { code: 'ro', name: 'Romanian' },
    { code: 'sk', name: 'Slovak' },
    { code: 'bg', name: 'Bulgarian' },
    { code: 'sr', name: 'Serbian' },
    { code: 'hr', name: 'Croatian' },
    { code: 'lt', name: 'Lithuanian' },
    { code: 'lv', name: 'Latvian' },
    { code: 'et', name: 'Estonian' },
    { code: 'sl', name: 'Slovenian' },
    { code: 'ta', name: 'Tamil' },
    { code: 'te', name: 'Telugu' },
    { code: 'ml', name: 'Malayalam' },
    { code: 'kn', name: 'Kannada' },
    { code: 'mr', name: 'Marathi' },
    { code: 'gu', name: 'Gujarati' },
    { code: 'pa', name: 'Punjabi' },
    { code: 'ur', name: 'Urdu' },
    { code: 'sw', name: 'Swahili' },
    { code: 'af', name: 'Afrikaans' },
    { code: 'zu', name: 'Zulu' },
    { code: 'xh', name: 'Xhosa' },
    { code: 'so', name: 'Somali' },
    { code: 'am', name: 'Amharic' },
    { code: 'yo', name: 'Yoruba' },
    { code: 'ig', name: 'Igbo' },
    { code: 'ha', name: 'Hausa' },
    { code: 'my', name: 'Burmese' },
    { code: 'km', name: 'Khmer' },
    { code: 'lo', name: 'Lao' },
    { code: 'si', name: 'Sinhala' },
    { code: 'ne', name: 'Nepali' },
    { code: 'mn', name: 'Mongolian' },
    { code: 'ka', name: 'Georgian' },
    { code: 'hy', name: 'Armenian' },
    { code: 'az', name: 'Azerbaijani' },
    { code: 'kk', name: 'Kazakh' },
    { code: 'uz', name: 'Uzbek' },
    { code: 'tg', name: 'Tajik' },
    { code: 'ky', name: 'Kyrgyz' },
    { code: 'tk', name: 'Turkmen' },
    { code: 'ps', name: 'Pashto' },
    { code: 'ku', name: 'Kurdish' },
    { code: 'ckb', name: 'Central Kurdish' },
    { code: 'sq', name: 'Albanian' },
    { code: 'bs', name: 'Bosnian' },
    { code: 'mk', name: 'Macedonian' },
    { code: 'is', name: 'Icelandic' },
    { code: 'ga', name: 'Irish' },
    { code: 'cy', name: 'Welsh' },
    { code: 'mt', name: 'Maltese' },
    { code: 'lb', name: 'Luxembourgish' },
    { code: 'fo', name: 'Faroese' },
    { code: 'sm', name: 'Samoan' },
    { code: 'to', name: 'Tongan' },
    { code: 'fj', name: 'Fijian' },
    { code: 'mg', name: 'Malagasy' },
    { code: 'rw', name: 'Kinyarwanda' },
    { code: 'rn', name: 'Kirundi' },
    { code: 'ny', name: 'Chichewa' },
    { code: 'ss', name: 'Swati' },
    { code: 'st', name: 'Southern Sotho' },
    { code: 'tn', name: 'Tswana' },
    { code: 'ts', name: 'Tsonga' },
    { code: 've', name: 'Venda' },
    { code: 'wo', name: 'Wolof' },
    { code: 'yo', name: 'Yoruba' },
    { code: 'zu', name: 'Zulu' }
];

document.addEventListener('DOMContentLoaded', function() {
    // Insert Features button into the DOM
    const featuresBtn = document.createElement('button');
    featuresBtn.className = 'features-btn';
    featuresBtn.id = 'features-btn';
    featuresBtn.title = 'Features';
    featuresBtn.innerHTML = '<i class="fas fa-star"></i>';
    document.body.appendChild(featuresBtn);

    // Modal overlay
    const overlay = document.createElement('div');
    overlay.id = 'features-modal-overlay';
    document.body.appendChild(overlay);

    // Modal
    const modal = document.createElement('div');
    modal.id = 'features-modal';
    modal.innerHTML = `
        <div id="features-modal-header">
            <h3>Features</h3>
            <button id="features-modal-close" title="Close">&times;</button>
        </div>
        <div id="features-modal-tabs">
            <button id="features-tab-beats" class="active">Focus Retention</button>
            <button id="features-tab-translate">Language Translator</button>
        </div>
        <div id="features-modal-content">
            <!-- Content will be injected here -->
        </div>
    `;
    document.body.appendChild(modal);

    // Modal logic
    function openModal() {
        overlay.classList.add('active');
        modal.classList.add('active');
        showBeats();
    }
    function closeModal() {
        overlay.classList.remove('active');
        modal.classList.remove('active');
    }
    featuresBtn.onclick = openModal;
    overlay.onclick = closeModal;
    modal.querySelector('#features-modal-close').onclick = closeModal;

    // Tab logic
    const tabBeats = modal.querySelector('#features-tab-beats');
    const tabTranslate = modal.querySelector('#features-tab-translate');
    const contentDiv = modal.querySelector('#features-modal-content');

    tabBeats.onclick = function() {
        tabBeats.classList.add('active');
        tabTranslate.classList.remove('active');
        showBeats();
    };
    tabTranslate.onclick = function() {
        tabTranslate.classList.add('active');
        tabBeats.classList.remove('active');
        showTranslator();
    };

    // Focus Retention (Binaural Beats) Section
    function showBeats() {
        contentDiv.innerHTML = `
            <div class="focus-beats-list">
                <div class="focus-beats-item">
                    <h4>Deep Focus Binaural Beats</h4>
                    <p>Enhance your concentration and retention with these scientifically-backed binaural beats.</p>
                    <iframe width="100%" height="80" src="https://www.youtube.com/embed/5qap5aO4i9A" title="Binaural Beats for Focus" frameborder="0" allowfullscreen></iframe>
                </div>
                <div class="focus-beats-item">
                    <h4>Alpha Waves for Studying</h4>
                    <p>Alpha wave music to help you relax and absorb information more effectively.</p>
                    <iframe width="100%" height="80" src="https://www.youtube.com/embed/2OEL4P1Rz04" title="Alpha Waves for Studying" frameborder="0" allowfullscreen></iframe>
                </div>
                <div class="focus-beats-item">
                    <h4>Productivity Booster</h4>
                    <p>Boost your productivity and stay in the zone with this curated track.</p>
                    <iframe width="100%" height="80" src="https://www.youtube.com/embed/1ZYbU82GVz4" title="Productivity Booster" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        `;
    }

    // Language Translator Section
    function showTranslator() {
        const langOptions = LANGUAGES.map(l => `<option value="${l.code}">${l.name}</option>`).join('');
        contentDiv.innerHTML = `
            <div class="translator-section">
                <label class="translator-label" for="translator-input">Enter text to translate:</label>
                <textarea id="translator-input" class="translator-input" placeholder="Type or paste text here..."></textarea>
                <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">
                    <select id="translator-source" class="translator-select">${langOptions}</select>
                    <span style="align-self: center;">→</span>
                    <select id="translator-target" class="translator-select">${langOptions}</select>
                </div>
                <button id="translator-btn" class="translator-btn">Translate</button>
                <label class="translator-label" for="translator-output">Translation:</label>
                <textarea id="translator-output" class="translator-output" readonly placeholder="Translation will appear here..."></textarea>
            </div>
        `;
        // Add translation logic
        const btn = document.getElementById('translator-btn');
        btn.onclick = async function() {
            const input = document.getElementById('translator-input').value.trim();
            const output = document.getElementById('translator-output');
            const sourceLang = document.getElementById('translator-source').value;
            const targetLang = document.getElementById('translator-target').value;
            if (!input) {
                output.value = '';
                output.placeholder = 'Please enter text to translate.';
                return;
            }
            output.value = `Translating from ${sourceLang} to ${targetLang}...`;
            try {
                const res = await fetch('http://127.0.0.1:5001/api/translate', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        text: input,
                        source: sourceLang,
                        target: targetLang
                    })
                });
                const data = await res.json();
                output.value = data.translatedText || data.error || 'Translation failed.';
            } catch (err) {
                output.value = 'Translation error.';
            }
        };
    }
}); 