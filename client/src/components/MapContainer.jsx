import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {
  //const googleAPIKey = "" + process.env.GOOGLE_API_KEY;
  const mapStyles = {
    height: "75vh",
    width: "75%"};

  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }

  return (
     <LoadScript
       googleMapsApiKey="AIzaSyC7QbtG-__nEqMcUrnlfkKgwRakqgfW4iM">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </LoadScript>
  )
}

export default MapContainer;