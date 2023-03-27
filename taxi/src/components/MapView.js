import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {
  Dimensions,
  Pressable,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useState} from 'react';
import style from '../styles/mapCompStyle';
const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const late = {
  latitude: 23.0786648,
  longitude: 72.5029199,
};

const MapviewComponent = () => {
  return (
    <MapView
      style={style.map}
      provider="google"
      initialRegion={{
        latitude: 23.0786648,
        longitude: 72.5029199,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      userLocationPriority={'high'}
      followsUserLocation={true}
      zoomTapEnabled
      zoomEnabled
      loadingEnabled
      loadingIndicatorColor="#606060"
      showsUserLocation={true}
      moveOnMarkerPress={true}>
      <Marker coordinate={late}></Marker>
    </MapView>
  );
};

export default MapviewComponent;
