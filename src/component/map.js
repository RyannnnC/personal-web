import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
import { useEffect} from "react";

const containerStyle = {
  width: '400px',
  height: '250px'
};

function Gmap() {
 
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCNAmSO7Y05AWRDwKcmtvHXkQKgFGpVniQ"
  })

  const [map, setMap] = React.useState(null)
  const [center, setCenter] = React.useState({
    lat: -33.92243936126831, 
    lng: 151.0358378700096
  })
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker
            position={center}
        />
      </GoogleMap>
  ) : <></>
}

export default React.memo(Gmap)