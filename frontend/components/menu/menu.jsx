import './menu.scss';
const Menu = require('react-burger-menu').slide;

const MenuItem = React.createClass({
    render() {
        return <li><a href={`/#${this.props.data.link}`}>{this.props.data.name}</a></li>;
    }
});

const TopMenu = React.createClass({
    render() {
        return (
            <nav className="top-menu hide-on-small-and-down">
                <ul>
                    {this.props.menuItems.map((item) => {
                        return <MenuItem key={item.id} data={item}/>;
                    })}
                </ul>
            </nav>
        );
    }
});

const MobileMenu = React.createClass({
    render() {
        return (
            <div className="hide-on-med-and-up">
                <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } >
                    <ul>
                        {this.props.menuItems.map((item) => {
                            return <MenuItem key={item.id} data={item}/>;
                        })}
                    </ul>
                </Menu>
            </div>
        );
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
            <div>
                <MobileMenu menuItems={this.state.menuItems}/>
                <TopMenu menuItems={this.state.menuItems}/>
            </div>
        );
    }
});

export default MainMenu;