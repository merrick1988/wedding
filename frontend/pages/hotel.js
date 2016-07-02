import Translate from "react-translate-component";
import PolaroidGallery from "./../components/polaroid-gallery/polaroid-gallery";

class HotelPage extends React.Component {
    constructor() {
        super();
        this.state = {
            photos: [{
                id: 1,
                src: require("../images/hotel.jpg"),
                alt: "Полулюкс"
            }, {
                id: 2,
                src: require("../images/hotel2.jpg"),
                alt: "Стандарный номер"
            }]
        };
    }

    render() {
        return (
            <section id="hotel" className="container">
                <Translate content="hotel.title" component="h6"/>
                <Translate content="hotel.intro" component="h2"/>
                <Translate content="hotel.p1" component="p"/>
                <Translate content="hotel.p2" component="p"/>
                <PolaroidGallery photos={this.state.photos}/>
            </section>
        );
    }
}

export default HotelPage;