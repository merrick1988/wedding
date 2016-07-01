import "./image-gallery.scss";
import ImageGallery from 'react-image-gallery';

class MyImageGallery extends React.Component {
    render() {
        const images = [
            {
                original: require("../../images/we_8.jpg")
            }, {
                original: require("../../images/we_5.png")
            }, {
                original: require("../../images/we_1.jpg")
            }, {
                original: require("../../images/we_2.jpg")
            }, {
                original: require("../../images/we_3.jpg")
            }, {
                original: require("../../images/we_4.jpg")
            }, {
                original: require("../../images/we_6.jpg")
            }, {
                original: require("../../images/we_9.jpg")
            }, {
                original: require("../../images/we_10.jpg")
            }, {
                original: require("../../images/we_11.jpg")
            }, {
                original: require("../../images/we_12.jpg")
            }, {
                original: require("../../images/we_13.jpg")
            }, {
                original: require("../../images/we_14.jpg")
            }, {
                original: require("../../images/we_15.jpg")
            }
        ];

        return (
            <ImageGallery items={images} slideInterval={2000}/>
        );
    }
}

export default MyImageGallery;