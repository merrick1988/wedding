import counterpart from "counterpart";

class I18n {
    constructor() {
        this.supportedLanguages = ["uk", "ru"];
        this.defaultLanguage = "uk";

        this.registerTranslation();
        counterpart.setLocale(this.getDefaultLanguage());
    }

    registerTranslation() {
        this.supportedLanguages.map(language => {
            counterpart.registerTranslations(language, require(`./i18n_${language}`));
        });
    }

    getDefaultLanguage() {
        const browserLanguages = window.navigator ? window.navigator.languages : [],
            supportedBrowserLanguages = _.intersection(browserLanguages, this.getSupportedLanguages());

        return supportedBrowserLanguages.length ? supportedBrowserLanguages[0] : this.defaultLanguage;
    }

    getSupportedLanguages() {
        return this.supportedLanguages;
    }

    setLanguage(language) {
        counterpart.setLocale(language);
    }
}

export default new I18n();