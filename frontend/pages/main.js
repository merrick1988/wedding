import {Parallax} from "react-parallax";
import MainMenu from "./../components/menu/menu.jsx";

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: require('./../images/main.jpg')
        };
    }

    render() {
        return (
            <Parallax bgImage={this.state.image} strength={400}>
                <MainMenu/>
                <div className="main-content">
                    <h1>Тома + Олег</h1>
                    <h3>06 августа 2016</h3>
                    <h3>Киев</h3>
                </div>
            </Parallax>
        );
    }
}

export default MainPage;