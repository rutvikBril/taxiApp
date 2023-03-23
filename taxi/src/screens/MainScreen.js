import React, {useEffect, useState} from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import {getAuth, onAuthStateChanged, signOut} from 'firebase/auth';

import {View, Text} from 'react-native';
import style from '../styles/homeScreenStyle';
import Mapview from '../components/MapView';
import GooglePlacesInput from '../components/GooglePlacesAutocomplete';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
// const INITIAL_POSITION = {
//   latitude: 23.033863,
//   longitude: 72.585022,
//   latitudeDelta: LATITUDE_DELTA,
//   longitudeDelta: LONGITUDE_DELTA,
// };

const HomeScreen = () => {
  const auth = getAuth();
  // const [mapRegion, setMapRegion] = useState({
  //   latitude: 23.033863,
  //   longitude: 72.585022,
  //   latitudeDelta: LATITUDE_DELTA,
  //   longitudeDelta: LONGITUDE_DELTA,
  // });
  // const [mapPin, setMapPin] = useState({
  //   latitude: 23.033863,
  //   longitude: 72.546,
  //   latitudeDelta: LATITUDE_DELTA,
  //   longitudeDelta: LONGITUDE_DELTA,
  // });
  // const userLocation = async () => {
  //   let {status} = await Location.requestForegroundPermissionsAsync();
  //   if (status !== 'granted') {
  //     setErrorMsg('Permission to access location was denied');
  //   }
  //   let location = await Location.getCurrentPositionAsync({
  //     enabledHighAccuracy: true,
  //   });

  // setMapRegion({
  //   latitude: location.coords.latitude,
  //   longitude: location.coords.longitude,
  //   latitudeDelta: LATITUDE_DELTA,
  //   longitudeDelta: LONGITUDE_DELTA,
  // });

  // const currentLocation = {
  //   description: 'Current Location',
  //   geometry: {
  //     location: {
  //       lat: mapRegion.latitude,
  //       lng: mapRegion.longitude,
  //     },
  //   },
  // };
  function googleSignout() {
    auth
      .signOut()

      .then(
        function () {
          console.log('Signout Succesfull');
        },
        function (error) {
          console.log('Signout Failed');
        },
      );
  }
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // userLocation();
  //     // console.log('currentUser', auth.currentUser);
  //     return interval;
  //     // currentLocation;
  //   }, 4000);
  // }, []);

  return (
    <View>
      <View style={style.container2}>
        <Mapview />

        {/* <Marker coordinate={currLocation}></Marker> */}
        {/* <Marker
            coordinate={currLocation}
            pinColor={'linen'}
            draggable={true}
            onDragStart={e => {
              // console.log('draged', e.nativeEvent.coordinate);
            }}
            // onDragEnd={e => {
            //   setMapRegion({
            //     latitude: e.nativeEvent.coordinate.latitude,
            //     longitude: e.nativeEvent.coordinate.longitude,
            //   });
            // }}
          >
            <Callout>
              <Text>i am hear</Text>
            </Callout>
          </Marker> */}
      </View>
      {/* <Circle center={mapRegion} radius={1000} /> */}
      <View style={style.searchContainer}>
        <GooglePlacesInput />
        {/* <GooglePlacesAutocomplete
    //           // predefinedPlaces={[currentLocation]}
    //           placeholder="Search"
    //           fetchDetails={true}
    //           autoFocus={true}
    //           GooglePlacesSearchQuery={{
    //             rankby: 'distance',
    //           }}
    //           query={{
    //             key: GOOGLE_PLACES_API_KEY,
    //             language: 'en',
    //             components: 'country:in',
    //             types: 'establishment',
    //             radius: 3000,
    //             location: `${mapRegion.latitude}, ${mapRegion.longitude}`,
    //           }}
    //           onPress={(data, details = null) => {
    //             setMapPin({
    //               latitude: details.geometry.location.lat,
    //               longitude: details.geometry.location.lng,
    //               latitudeDelta: LATITUDE_DELTA,
    //               longitudeDelta: LONGITUDE_DELTA,
    //             });
    //           }}
    //           onFail={error => console.error(error)}
    //           requestUrl={{
    //             url: 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
    //             useOnPlatform: 'web',
    //           }}
    //           enablePoweredByContainer={false}
    //           styles={{textInput: style.inputSearch}}
    //         />
    //         <View>
    //           <TouchableOpacity onPress={() => googleSignout()}>
    //             <Text>Log Out</Text>
    //           </TouchableOpacity>
    //         </View>
    //       </View>*/}
      </View>
      <View>
        <TouchableOpacity onPress={() => googleSignout()}>
          <Text>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default HomeScreen;
