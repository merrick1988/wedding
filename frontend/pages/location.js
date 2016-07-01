import Translate from "react-translate-component";
import {Parallax} from "react-parallax";

class LocationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: require("./../images/location.jpg")
        };
    }

    render() {
        return (
            <Parallax bgImage={this.state.image} strength={400} className="react-parallax--blur">
                <section id="location" className="section--image">
                    <Translate content="location.title" component="h6"/>
                    <div className="container">
                        <Translate content="location.locals.intro" component="h2"/>
                        <Translate content="location.locals.p1" component="p"/>
                    </div>

                    <div className="container">
                        <Translate content="location.foreigners.intro" component="h2"/>
                        <Translate content="location.foreigners.p1" component="p"/>
                    </div>

                    <div className="container">
                        <Translate content="location.drivers.intro" component="h2"/>
                        <Translate content="location.drivers.p1" component="p"/>
                    </div>
                </section>
            </Parallax>
        );
    }
}

export default LocationPage;