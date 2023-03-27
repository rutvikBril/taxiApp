import React from 'react';
import {Text, View} from 'react-native';
import GooglePlacesInput from '../components/GooglePlacesAutocomplete';
import MapviewComponent from '../components/MapView';

const PickUpDropLocation = () => {
  return (
    <View style={{flex: 1}}>
      <Text>Hello</Text>
      {/* <MapviewComponent /> */}
      <GooglePlacesInput />
      <GooglePlacesInput />
    </View>
  );
};
export default PickUpDropLocation;
