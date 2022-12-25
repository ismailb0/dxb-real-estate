import React from 'react'
import './Map.css';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import secrets from "../vault.json"

// eslint-disable-next-line
const google = window.google;

const containerStyle = {
  width: '1440px',
  height: '1000px'
};

const center = {
  lat: 25.08521194009404,
  lng: 55.1369093986773
};

function Map(props) {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: secrets.GOOGLE_MAPS_KEY
  })

  // eslint-disable-next-line
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <div className="Map">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {props.areaOverlays}
      </GoogleMap>
    </div>
  ) : <></>
}

export default Map;
