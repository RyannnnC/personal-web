import { Marker } from '@react-google-maps/api';
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '250px'
  };
  
  const center = {
    lat: -33.92243936126831, 
    lng: 151.0358378700096
  };
  
  function SimpleMap() {
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyCNAmSO7Y05AWRDwKcmtvHXkQKgFGpVniQ"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          <Marker
            position={center}
          />
        </GoogleMap>
      </LoadScript>
    )
  }
  
  export default React.memo(SimpleMap)