import counterpart from "counterpart";

class I18n {
    constructor() {
        this.supportedLanguages = [{
            code: "uk",
            lan: "укр"
        }, {
            code: "ru",
            lan: "рус"
        }];

        this.defaultLanguage = "uk";

        this.registerTranslation();
        counterpart.setLocale(this.getDefaultLanguage());
    }

    registerTranslation() {
        this.getSupportedLanguagesCodes().map((language) => {
            counterpart.registerTranslations(language, require(`./i18n_${language}`));
        });
    }

    getDefaultLanguage() {
        const browserLanguages = window.navigator ? window.navigator.languages : [],
            supportedBrowserLanguages = _.intersection(browserLanguages, this.getSupportedLanguagesCodes());

        return supportedBrowserLanguages.length ? supportedBrowserLanguages[0] : this.defaultLanguage;
    }

    getSupportedLanguages() {
        return this.supportedLanguages;
    }

    getSupportedLanguagesCodes() {
        return this.supportedLanguages.map((language) => language.code);
    }

    setLanguageByCode(language) {
        counterpart.setLocale(language);
    }
}

export default new I18n();