import Translate from "react-translate-component";
import WeddingDay from "./../components/wedding-day/wedding-day";

class WeddingPage extends React.Component {
    render() {
        return (
            <section id="wedding" className="section--gray">
                <Translate content="wedding.title" component="h6"/>
                <WeddingDay/>
            </section>
        );
    }
}

export default WeddingPage;