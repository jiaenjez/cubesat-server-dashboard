/* eslint-disable */
import React from 'react';
import Map, {Marker} from 'react-map-gl';
import {
  DEFAULT_ZOOM,
  DEFAULT_LATITUDE,
  DEFAULT_LONGITUDE
} from './constant';

// eslint-disable-next-line no-undef
const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const FlightMap = () => {
  return (
    <Map
      initialViewState={{
        latitude: DEFAULT_LATITUDE,
        longitude: DEFAULT_LONGITUDE,
        zoom: DEFAULT_ZOOM
      }}
      style={{width: 800, height: 600}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      {/*<Marker latitude={33.6405}*/}
      {/*  longitude={-117.8443}*/}
      {/*  color="red" />*/}
    </Map>
  );
};

export default FlightMap;
