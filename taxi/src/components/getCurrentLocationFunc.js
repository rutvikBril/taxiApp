import Geolocation from '@react-native-community/geolocation';
import {useState} from 'react';
// navigator.geolocation = require('@react-native-community/geolocation');
// navigator.geolocation = require('react-native-geolocation-service');

const getCurrentLocationFunc = () => {
  const [currLocation, setCurrLocation] = useState();
  const handleSetLocation = e => {
    setCurrLocation(e);
  };
  Geolocation.getCurrentPosition(info => handleSetLocation(info));
  return currLocation;
};

export default getCurrentLocationFunc;
