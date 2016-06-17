import WeddingDay from "./../components/wedding-day/wedding-day";

class WeddingPage extends React.Component {
    render() {
        return (
            <section id="wedding" className="section--pink">
                <h2 className="section__head">Наша Свадьба</h2>
                <WeddingDay/>
            </section>
        );
    }
}

export default WeddingPage;