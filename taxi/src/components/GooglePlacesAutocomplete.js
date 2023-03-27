import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import style from '../styles/homeScreenStyle';
import {useState} from 'react';

function GooglePlacesInput() {
  const [pickUpPointMarker, setPickUpPointMarker] = useState();
  const handleSetPickUpMarker = e => {
    setPickUpPointMarker(e);
  };
  return (
    <GooglePlacesAutocomplete
      query={{
        key: GOOGLE_PLACES_API_KEY,
        language: 'en,hn,guj',
        components: 'country:in',
      }}
      placeholder="Search"
      listUnderlayColor="red"
      onPress={(data, details) => {
        handleSetPickUpMarker(JSON.stringify(details?.geometry?.location));
      }}
      onFail={error => console.log(error)}
      onNotFound={() => console.log('no results')}
      fetchDetails={true}
      currentLocation={true}
      currentLocationLabel="Current Location"
      enableHighAccuracyLocation
      enablePoweredByContainer={false}
      styles={{textInput: style.inputSearch}}
    />
  );
}

export default GooglePlacesInput;
