import Menu from "../menu/menu.jsx";
import LanguagesSwitcher from "./../languages-switcher/languages-switcher";

class Header extends React.Component {
    render() {
        return (
            <header>
                <Menu/>
                <LanguagesSwitcher/>
            </header>
        );
    }
}

export default Header;