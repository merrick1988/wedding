import Translate from "react-translate-component";
import {Parallax} from "react-parallax";

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: require("./../images/main.jpg")
        };
    }

    render() {
        return (
            <Parallax bgImage={this.state.image} strength={400} className="parallax-main">
                <div className="parallax-main-container">
                    <Translate content="main.Toma" component="h1"/>
                    <Translate content="main.and" component="h3"/>
                    <Translate content="main.Oleg" component="h1"/>
                </div>
                <Translate content="main.date" component="h5"/>
            </Parallax>
        );
    }
}

export default MainPage;