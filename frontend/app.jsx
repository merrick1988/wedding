import "./images/favicon.ico";
import "./styles/styles.scss";

import Header from "./components/header/header";
import MainPage from "./pages/main";
import WeddingPage from "./pages/wedding";
import HistoryPage from "./pages/history";
import MapPage from "./pages/map";
import LocationPage from "./pages/location";
import HotelPage from "./pages/hotel";
import SecondDayPage from "./pages/second-day";
import Footer from "./components/footer/footer";

window.console = window.console || {error() {}, log() {}, debug() {}};

const WeddingApp = React.createClass({
    render() {
        return (
            <div>
                <Header/>
                <main>
                    <MainPage/>
                    <HistoryPage/>
                    <WeddingPage/>
                    <MapPage/>
                    <LocationPage/>
                    <HotelPage/>
                    <SecondDayPage/>
                </main>
                <Footer/>
            </div>
        );
    }
});

ReactDOM.render(<WeddingApp/>, document.getElementById('content'));