import {useEffect, useRef} from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import style from '../styles/gelocationautocompleteStyle';
import Geolocation from '@react-native-community/geolocation';
import {SafeAreaView} from 'react-native';

// Geolocation.getCurrentPosition(info => console.log(info));

const GOOGLE_PLACES_API_KEY = 'AIzaSyD1tKpEXpLgh4ORN6GrX_cjCycgwlbswMg';

const homePlace = {
  type: 'favorite',
  description: 'Home',
  geometry: {location: {lat: 23.0461, lng: 72.6366}},
};
const officePlace = {
  type: 'work',
  description: 'Office',
  geometry: {location: {lat: 23.0787, lng: 72.5013}},
};
navigator.geolocation = require('@react-native-community/geolocation');
navigator.geolocation = require('react-native-geolocation-service');

const GooglePlacesInput = () => {
  //   const ref = useRef();
  const getAddress = () => {
    // console.log(ref.current?.getAddressText());
  };
  return (
    <GooglePlacesAutocomplete
      query={{
        key: GOOGLE_PLACES_API_KEY,
        language: 'en,hn,guj',
        components: 'country:in',
      }}
      placeholder="Search"
      onPress={(data, details) => {
        console.log(data, details);
      }}
      onFail={error => console.log(error)}
      onNotFound={() => console.log('no results')}
      fetchDetails={true}
      currentLocation={true}
      currentLocationLabel="Current Location"
      enableHighAccuracyLocation
      enablePoweredByContainer={false}
      styles={{
        textInput: style.inputSearch,
        predefinedPlacesDescription: {
          color: '#000000',
        },
      }}
      predefinedPlaces={[homePlace, officePlace]}
    />
  );
};
export default GooglePlacesInput;
