import './map.scss';
import GoogleMap from 'google-map-react';

class Marker extends React.Component {
    render() {
        return (
            <div className="map__marker">
                <div className="map__marker__body">
                    <span>Трипольское Солнце</span>
                    <a href="https://goo.gl/maps/zhoPL6wj4E22" target="blank">построить марсшрут</a>
                </div>
            </div>
        );
    }
}

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hotelLocation: {
                lat: 50.246874,
                lng: 30.559530
            },
            mapOptions:{
                panControl: false,
                scrollwheel: false
            }
        };
    }

    render() {
        return (
            <GoogleMap
                    options={this.state.mapOptions}
                    defaultCenter={this.state.hotelLocation}
                    defaultZoom={9}>
                <Marker lat={this.state.hotelLocation.lat} lng={this.state.hotelLocation.lng}/>
            </GoogleMap>
        );
    }
}

export default Map;