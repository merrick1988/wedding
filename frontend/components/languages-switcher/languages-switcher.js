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

    changeLanguage(language) {
        this.setState({
            selectedLanguage: language
        });
        i18n.setLanguage(language);
    },

    isLanguageActive(language) {
        return _.isEqual(language, this.state.selectedLanguage);
    },

    render() {
        return (
            <ul className="language-switcher">
                {this.state.languages.map((language) => {
                    return (<li key={language}
                            className={classnames({active: this.isLanguageActive(language)})}
                            onClick={() => this.changeLanguage(language)}>
                        {language}
                    </li>);
                })}
            </ul>
        );
    }
});

export default LanguagesSwitcher;