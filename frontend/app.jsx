import "jquery";
import "lodash";

import "./styles/styles.scss";

import MainPage from "./pages/main";
import WeddingPage from "./pages/wedding";
import HistoryPage from "./pages/history";
import MapPage from "./pages/map";

window.console = window.console || {error() {}, log() {}, debug() {}};

ReactDOM.render(
    <div>
        <MainPage/>
        <HistoryPage/>
        <WeddingPage/>
        <MapPage/>
    </div>
    , document.getElementById('content')
);