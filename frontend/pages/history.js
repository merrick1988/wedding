import Translate from "react-translate-component";
import MyImageGallery from "./../components/image-gallery/image-gallery";

class HistoryPage extends React.Component {
    render() {
        return (
            <div id="history">
                <section className="container">
                    <Translate content="history.title" component="h6"/>
                    <Translate content="history.intro" component="h2"/>
                    <Translate content="history.p1" component="p"/>
                    <Translate content="history.p2" component="p"/>
                    <Translate content="history.p3" component="p"/>
                </section>
                <MyImageGallery/>
            </div>

        );
    }
}

export default HistoryPage;
