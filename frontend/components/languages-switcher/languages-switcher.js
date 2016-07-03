import "./languages-switcher.scss";

import classnames from 'classnames';
import i18n from "./../../utils/i18n/i18n";

const LanguagesSwitcher = React.createClass({
    getInitialState() {
        return {
            languages: i18n.getSupportedLanguages(),
            selectedLanguage: i18n.getDefaultLanguage()
        };
    },

    changeLanguage(languageCode) {
        this.setState({
            selectedLanguage: languageCode
        });
        i18n.setLanguageByCode(languageCode);
    },

    isLanguageActive(language) {
        return _.isEqual(language, this.state.selectedLanguage);
    },

    render() {
        return (
            <ul className="language-switcher">
                {this.state.languages.map((language) => {
                    return (<li key={language.code}
                            className={classnames({active: this.isLanguageActive(language.code)})}
                            onClick={() => this.changeLanguage(language.code)}>
                        {language.lan}
                    </li>);
                })}
            </ul>
        );
    }
});

export default LanguagesSwitcher;