import Translate from "react-translate-component";
import counterpart from "counterpart";
import PolaroidGallery from "../components/polaroid-gallery/polaroid-gallery";

class secondDayPage extends React.Component {
    constructor() {
        super();
        this.state = {
            photos: [{
                id: 1,
                src: require("../images/park.jpg"),
                alt: counterpart("secondDay.images.park")
            }, {
                id: 2,
                src: require("../images/barbecue.jpg"),
                alt: counterpart("secondDay.images.barbecue")
            }, {
                id: 3,
                src: require("../images/x-park.jpg"),
                alt: counterpart("secondDay.images.xPark")
            }, {
                id: 4,
                src: require("../images/volleyball.jpg"),
                alt: counterpart("secondDay.images.volleyball")
            }, {
                id: 5,
                src: require("../images/beach.jpg"),
                alt: counterpart("secondDay.images.beach")
            }]
        };
    }

    render() {
        return (
            <section id="secondDay" className="container">
                <Translate content="secondDay.title" component="h6"/>
                <Translate content="secondDay.intro" component="h2"/>
                <Translate content="secondDay.p1" component="p"/>
                <PolaroidGallery photos={this.state.photos}/>
            </section>
        );
    }
}

export default secondDayPage;