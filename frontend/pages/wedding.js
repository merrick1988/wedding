import WeddingDay from "./../components/wedding-day/wedding-day";

class WeddingPage extends React.Component {
    render() {
        return (
            <section id="wedding" className="section--gray">
                <h6>Наша Свадьба</h6>
                <WeddingDay/>
            </section>
        );
    }
}

export default WeddingPage;