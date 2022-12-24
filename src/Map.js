import React from 'react'
import './Map.css';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

// eslint-disable-next-line
const google = window.google;

const containerStyle = {
  width: '1440px',
  height: '1000px'
};

const center = {
  lat: 25.065170,
  lng: 55.216860
};

function Map() {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBVlyVpD1qbffvow_g26LjCuAIUce42wwA"
  })

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
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
      </GoogleMap>
    </div>
  ) : <></>
}

export default Map;
