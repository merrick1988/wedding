import "lodash";
import "./styles/styles.scss";

import Header from "./components/header/header.js";
import MainPage from "./pages/main";
import WeddingPage from "./pages/wedding";
import HistoryPage from "./pages/history";
import MapPage from "./pages/map";
import LocationPage from "./pages/location";
import HotelPage from "./pages/hotel";
import ContactsPage from "./pages/contacts";
import SecondDayPage from "./pages/second-day";

window.console = window.console || {error() {}, log() {}, debug() {}};

const WeddingApp = React.createClass({
    render() {
        return (
            <div id="outer-container">
                <Header/>
                <main id="page-wrap">
                    <MainPage/>
                    <HistoryPage/>
                    <WeddingPage/>
                    <MapPage/>
                    <LocationPage/>
                    <HotelPage/>
                    <SecondDayPage/>
                    <ContactsPage/>
                </main>
            </div>
        );
    }
});

ReactDOM.render(<WeddingApp/>, document.getElementById('content'));