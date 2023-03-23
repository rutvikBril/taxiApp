import {useEffect, useRef} from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import style from '../styles/homeScreenStyle';

const GOOGLE_PLACES_API_KEY = 'AIzaSyD1tKpEXpLgh4ORN6GrX_cjCycgwlbswMg';
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
      currentLocationLabel="Current location"
      enableHighAccuracyLocation
      enablePoweredByContainer={false}
      styles={{textInput: style.inputSearch}}
    />
  );
};

export default GooglePlacesInput;
