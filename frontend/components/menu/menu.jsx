import './menu.scss';

const MenuItem = React.createClass({
    render() {
        return <li><a href={`/#${this.props.data.link}`}>{this.props.data.name}</a></li>;
    }
});

const MainMenu = React.createClass({
    getInitialState () {
        const menu = require("./menu-items.json");

        return {
            menuItems: menu.menuItems
        };
    },
    render() {
        return (
            <header>
                <menu className="menu-top">
                    <ul>
                        {this.state.menuItems.map((item) => {
                            return <MenuItem key={item.id} data={item}/>;
                        })}
                    </ul>
                </menu>
            </header>
        );
    }
});

export default MainMenu;