import {Parallax} from "react-parallax";

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: require('./../images/main.jpg')
        };
    }

    render() {
        return (
            <Parallax bgImage={this.state.image} strength={400} className="parallax-main">
                <div className="parallax-main-container">
                    <h1>Тома</h1>
                    <h3> & </h3>
                    <h1>Олег</h1>
                </div>
                <h5>06 августа 2016, Киев</h5>
            </Parallax>
        );
    }
}

export default MainPage;