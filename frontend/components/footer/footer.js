import "./footer.scss";

import Translate from "react-translate-component";
import Scroll from 'react-scroll';

class Footer extends React.Component {
    scrollToTop() {
        Scroll.animateScroll.scrollToTop();
    }
    render() {
        return (
            <footer className="page-footer">
                <div className="footer-divider" onClick={this.scrollToTop}>
                    <i className="material-icons">keyboard_arrow_up</i>
                </div>
                <div className="row">
                    <div className="col s12 m6 l5 contacts left-align">
                        <Translate content="footer.title.we" component="h6"/>
                        <div className="row">
                            <Translate content="footer.contacts.toma" className="col s4 m2 contact-name"/>
                            <a className="col s8 m10 l8 right-align" href="tel:+380997610249">+380 (99) 761 02 49</a>
                        </div>
                        <div className="row">
                            <Translate content="footer.contacts.oleg" className="col s4 m2 contact-name"/>
                            <a className="col s8 m10 l8 right-align" href="tel:+380934833005">+380 (93) 483 30 05</a>
                        </div>
                    </div>
                    <div className="col s12 offset-l2 m6 l5 contacts right-align">
                        <Translate content="footer.title.organizers" component="h6"/>
                        <div className="row">
                            <Translate content="footer.contacts.maxim" className="col s4 m2 offset-l2 contact-name"/>
                            <a className="col s8 m10 l8 right-align" href="tel:+380951399509">+380 (95) 139 95 09</a>
                        </div>
                        <div className="row">
                            <Translate content="footer.contacts.iana" className="col s4 m2 offset-l2 contact-name"/>
                            <a className="col s8 m10 l8 right-align" href="tel:+380951399509">+380 (95) 139 95 09</a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;