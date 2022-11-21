// import React from 'react';
// import GoogleMapReact from 'google-map-react';

// import AnyReactComponent from './AnyReactComponent.js';

// const MapContainer = (props) => {

//   const defaultProps = {
//     center: [
//       37.2269,
//       -121.85614
//     ],
//     zoom: 11
//   };

//   const regStyle = {
//     position: 'absolute',
//     border: '5px solid #f44336',
//     textAlign: 'center',
//     color: '#3f51b5',
//     fontSize: 16,
//     fontWeight: 'bold',
//     padding: 4,
//     cursor: 'pointer'
//   }

//   const hoverStyle = {
//     ...regStyle,
//     border: '6px solid #3f51b5',
//     color: '#f44336',
//     fontSize: 22,
//   }

//   const style = props.$hover ? regStyle : hoverStyle

//   return (
//     // Important! Always set the container height explicitly
//     <div style={{ height: '600px', width: '600px' }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE_API_KEY}`, language: 'en' }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//         hoverDistance={30}
//         onChildMouseEnter={this.onChildMouseEnter}
//         onChildMouseLeave={this.onChildMouseLeave}
//       >
//         {/* map over all coordinates/respective trail names/created By from DB and input into map markers like below */}
//         <AnyReactComponent lat={37.2269} lng={-121.85614} style={style} descrip="marker 1"/>
//         <AnyReactComponent lat={37.3} lng={-121.9} style={style} descrip="marker 2"/>
//         <AnyReactComponent lat={37.4} lng={-122} style={style} descrip="marker 3"/>
//         <AnyReactComponent lat={37.5} lng={-122.1} style={style} descrip="marker 4"/>
//       </GoogleMapReact>
//     </div>
//   );
// }


// export default MapContainer;

import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import Button from '@material-ui/core/Button';

const MapContainer = ({ array, isAdding, getLocation }) => {

  const [ selected, setSelected ] = useState({});
  const [ currentPosition, setCurrentPosition ] = useState({});

  const markerRef = useRef(null);

  const defaultCenter = {
    lat: 37.5, lng: -121.8
  }

  const onSelect = item => {
    setSelected(item);
  }

  const success = (position) => {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    const currentPosition = {
      lat: latitude,
      lng: longitude
    }
    setCurrentPosition(currentPosition);
  }

  const onMarkerDragEnd = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setCurrentPosition({ lat, lng})
  };

  const footer = (
    <div className="footer">
      <div className="inner-footer">
      <span className="location-text">Choose location and press</span>
      <Button variant="contained" color="primary" onClick={() => getLocation(currentPosition)}>
        Next
      </Button>
      </div>
    </div>
  );

  const mapStyles = () => {
    if (!isAdding) {
      return {
        marginTop: "-20px",
        height: "600px",
        width: "600px"
      }
    } else {
      return {
        marginTop: "-20px",
        height: "600px",
        width: "600px"
      }
    }
  }

  //navigator.geolocation.getCurrentPosition(success);


  return (
  <>
    <LoadScript
      id="script-loader"
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
    >
      <GoogleMap
        id='example-map'
        mapContainerStyle={mapStyles()}
        draggable={true}
        zoom={13}
        center={currentPosition.lat ? currentPosition : defaultCenter}
      >
        {
          array ?
          array.map((item, index) => {
            return (
            <Marker
            key={index}
            position={item.location}
            onClick={() => onSelect(item)}
            />
            )
          }) : null
        }
        {
          isAdding ?
          <Marker
          position={currentPosition}
          ref={() => markerRef}
          onDragEnd={(e) => onMarkerDragEnd(e)}
          draggable={true} /> :
          null
        }
        {
          selected.location ?
          (
            <InfoWindow
            position={selected.location}
            onCloseClick={() => setSelected({})}
          >
            <div className="infowindow">
              <p>{selected.title}</p>
              <img src={`${selected.image}`} className="small-image" alt="image not found"/>
              <p>Trail Name: {selected.trailName}</p>
              <p>Length: {selected.length}</p>
              <p>Traffic: {selected.traffic}</p>
              <p>Off Leash?: {selected.offLeash}</p>
            </div>
          </InfoWindow>
          ) : null
        }
      </GoogleMap>
    </LoadScript>
    {
      isAdding ?
      footer :
      null
    }
  </>
    )
}

export default MapContainer;

/*
data:image/jpeg;base64,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
*/