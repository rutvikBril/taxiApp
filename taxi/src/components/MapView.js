import {useRef, useState} from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MapView, {Marker} from 'react-native-maps';
import {Dimensions, View} from 'react-native/';
import style from '../styles/homeScreenStyle';

//for geolocation
navigator.geolocation = require('@react-native-community/geolocation');
navigator.geolocation = require('react-native-geolocation-service');

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const GOOGLE_PLACES_API_KEY = 'AIzaSyD1tKpEXpLgh4ORN6GrX_cjCycgwlbswMg';

const Mapview = () => {
  const MyRef = useRef(null);
  const goToSearchPlaceAnimation = async details => {
    await MyRef.current?.animateToRegion(
      {
        latitude: details?.geometry?.location?.lat,
        longitude: details?.geometry?.location?.lng,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      1500,
    );
  };
  const [pickUpPointMarker, setPickUpPointMarker] = useState(null);

  return (
    <View>
      <View style={style.searchContainer}>
        <GooglePlacesAutocomplete
          styles={{textInput: style.inputSearch}}
          query={{
            key: GOOGLE_PLACES_API_KEY,
            language: 'en,hn,guj',
            components: 'country:in',
          }}
          placeholder="Search"
          currentLocation={true}
          currentLocationLabel="Current Location"
          enableHighAccuracyLocation={true}
          onPress={(data, details = null) => {
            setPickUpPointMarker({
              name: data?.description,
              latitude: details?.geometry?.location?.lat,
              longitude: details?.geometry?.location?.lng,
            });
            goToSearchPlaceAnimation(details);
          }}
          listUnderlayColor={'transparent'}
          fetchDetails={true}
          onFail={error => console.log(error)}
          onNotFound={() => console.log('no results')}
          enablePoweredByContainer={false}
        />
      </View>
      <View style={style.container2}>
        <MapView
          ref={MyRef}
          style={style.map}
          provider="google"
          showsUserLocation={true}
          userLocationPriority={'high'}
          userLocationUpdateInterval={5000}
          showsMyLocationButton={true}
          followsUserLocation={true}
          onUserLocationChange={console.log('changed')}
          zoomTapEnabled
          zoomControlEnabled
          zoomEnabled
          loadingEnabled
          loadingIndicatorColor="#606060"
          moveOnMarkerPress
          onPress={data => {
            setPickUpPointMarker({
              latitude: data?.nativeEvent?.coordinate?.latitude,
              longitude: data?.nativeEvent?.coordinate?.longitude,
            });
          }}
          focusable={true}>
          {pickUpPointMarker && (
            <Marker
              coordinate={{
                latitude: pickUpPointMarker?.latitude,
                longitude: pickUpPointMarker?.longitude,
              }}
              focusable={true}
            />
          )}
        </MapView>
      </View>
    </View>
  );
};

export default Mapview;
