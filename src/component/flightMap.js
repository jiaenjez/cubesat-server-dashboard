/* eslint-disable */
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { blue, pink, purple, grey } from '@mui/material/colors';
import {Box} from '@mui/material';
import ReactMap, {
  Map, MapRef, FullscreenControl, NavigationControl,
  ViewState, ViewStateChangeEvent, MapboxEvent,
  MapLayerMouseEvent, MapStyleDataEvent
} from 'react-map-gl';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  DEFAULT_ZOOM,
  DEFAULT_LATITUDE,
  DEFAULT_LONGITUDE, DEFAULT_MAP_SETTING
} from './constant';

// eslint-disable-next-line no-undef
const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const FlightMap = (props) => {
  const getDefaultViewState = () => {
    return {
      latitude: DEFAULT_LATITUDE,
      longitude: DEFAULT_LONGITUDE,
      zoom: DEFAULT_ZOOM,
      bearing: 0,
      pitch: 0,
      padding: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      }
    };
  };

  const [viewState, setViewState] = useState(getDefaultViewState());
  const mapRef = useRef(null);

  useEffect(() => {
    // Mount
    // Unmount
    return () => {};
  }, []);

  // useEffect(() => {
  //   const mapGeoBounds = getMapGeoBounds();
  //   if (props.onMapChange)
  //     props.onMapChange(viewState, mapGeoBounds);
  //
  // }, [mapRef.current]);

  const addMapSources = (map) => {

  };

  const handleLoad = (event) => {
    const map = event.target;
    if (map == undefined) {
      return;
    }

    addMapSources(map);
  };

  const handleClick = (event) => {
    if (event.features == undefined || event.features.length <= 0) {
      return;
    }

    const selectedFeature = event.features[0];
    if (selectedFeature.properties) {

    }
  };

  const defaultMapSettings = DEFAULT_MAP_SETTING;

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
