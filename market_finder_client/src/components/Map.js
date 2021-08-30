import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, } from 'react-google-maps';

class Map extends Component {
    render() {
        //set default here
        const Map = withGoogleMap(props => (
            <GoogleMap defaultCenter={{ lat: this.props.latitude, lng: this.props.longitude }} defaultZoom={15} />
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

