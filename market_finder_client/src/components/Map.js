import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, } from 'react-google-maps';

class Map extends Component {
    render() {
        const Map = withGoogleMap(props => (
            <GoogleMap defaultCenter={{ lat: 40.670986, lng: -73.908194 }} defaultZoom={15} />
        ));

        return (
            <div>
                <Map
                    containerElement={<div style={{ height: `300px`, width: '300px' }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }
}

export default Map;

