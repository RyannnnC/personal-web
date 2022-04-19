import { Marker } from '@react-google-maps/api';
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import useWidth from '../helpers/detectWidth';

const center = {
    lat: -33.92243936126831, 
    lng: 151.0358378700096
};
  
function SimpleMap() {
    const c_height = useWidth();
    const [mh, setMh] = React.useState('200px');

    React.useEffect(() => {
        if (c_height === 'xs') {setMh('200px')}
        else if (c_height === 'sm') {setMh('250px')}
        else if (c_height === 'md') {setMh('300px')}
        else if (c_height === 'lg') {setMh('350px')}
        else if (c_height === 'xl') {setMh('400px')}
    },[c_height])
    
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyCNAmSO7Y05AWRDwKcmtvHXkQKgFGpVniQ"
      >
        <GoogleMap
          mapContainerStyle={{
            width: '100%',
            height: mh,
        }}
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