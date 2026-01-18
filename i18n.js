// i18n.js - Internationalization System

class I18n {
    constructor() {
        this.translations = {};
        this.currentLang = this.getStoredLanguage() || this.getBrowserLanguage();
        this.init();
    }

    getBrowserLanguage() {
        const lang = navigator.language || navigator.userLanguage;
        return lang.startsWith('pt') ? 'pt' : 'en';
    }

    getStoredLanguage() {
        return localStorage.getItem('preferredLanguage');
    }

    setStoredLanguage(lang) {
        localStorage.setItem('preferredLanguage', lang);
    }

    async init() {
        await this.loadTranslations('en');
        await this.loadTranslations('pt');
        this.setLanguage(this.currentLang);
        this.setupEventListeners();
    }

    async loadTranslations(lang) {
        try {
            const response = await fetch(`./locales/${lang}.json`);
            this.translations[lang] = await response.json();
        } catch (error) {
            console.error(`Failed to load ${lang} translations:`, error);
        }
    }

    setLanguage(lang) {
        this.currentLang = lang;
        this.setStoredLanguage(lang);
        document.documentElement.lang = lang;
        this.updatePageContent();
        this.updateActiveButton();
    }

    updatePageContent() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getTranslation(key);
            
            if (translation) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
    }

    getTranslation(key) {
        const keys = key.split('.');
        let value = this.translations[this.currentLang];
        
        for (const k of keys) {
            if (value && value[k] !== undefined) {
                value = value[k];
            } else {
                console.warn(`Translation not found for key: ${key}`);
                return key;
            }
        }
        
        return value;
    }

    updateActiveButton() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === this.currentLang) {
                btn.classList.add('active');
            }
        });
    }

    setupEventListeners() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.getAttribute('data-lang');
                this.setLanguage(lang);
            });
        });
    }
}

// Initialize i18n when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new I18n();
    });
} else {
    new I18n();
}
