class ContactsPage extends React.Component {
    render() {
        return (
            <footer id="contacts" className="page-footer white">
                <div className="footer-divider">
                    <i className="material-icons">keyboard_arrow_up</i>
                </div>
                <div className="row">
                    <div className="col s12 m6 l5 contacts left-align">
                        <h6>Наши контакты</h6>
                        <div className="row">
                            <span className="col s4 m2 contact-name">Тома</span>
                            <a className="col s8 m10 l8 right-align" href="tel:+380997610249">+380 (99) 761 02 49</a>
                        </div>
                        <div className="row">
                            <span className="col s4 m2 contact-name">Олег</span>
                            <a className="col s8 m10 l8 right-align" href="tel:+380934833005">+380 (93) 483 30 05</a>
                        </div>
                    </div>
                    <div className="col s12 offset-l2 m6 l5 contacts right-align">
                        <h6>Контакты наших организаторов</h6>
                        <div className="row">
                            <span className="col s4 m2 offset-l2 contact-name">Максим</span>
                            <a className="col s8 m10 l8 right-align" href="tel:+380951399509">+380 (95) 139 95 09</a>
                        </div>
                        <div className="row">
                            <span className="col s4 m2 offset-l2 contact-name">Яна</span>
                            <a className="col s8 m10 l8 right-align" href="tel:+380951399509">+380 (95) 139 95 09</a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default ContactsPage;