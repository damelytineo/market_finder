import React, { Component } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

class Map extends Component {
  render() {
    const containerStyle = {
      width: "300px",
      height: "300px",
    };

    const center = {
      lat: this.props.latitude,
      lng: this.props.longitude,
    };

    return (
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    );
  }
}

export default Map;
