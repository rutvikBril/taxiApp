import React, { useEffect, useState } from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';

import { View, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import style from '../styles/homeScreenStyle';
import { getAuth } from 'firebase/auth';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
  latitude: 23.033863,
  longitude: 72.585022,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};
//to use current location

navigator.geolocation = require('expo-location');

//for Home Location

const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 23.0461, lng: 72.6366 } },
};

//for Office Location

const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 23.0802, lng: 72.4952 } },
};
//main Home function

const HomeScreen = () => {
  const auth = getAuth();

  const [mapRegion, setMapRegion] = useState({
    latitude: 23.033863,
    longitude: 72.585022,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });
  const [mapPin, setMapPin] = useState({
    latitude: 23.033863,
    longitude: 72.546,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });
  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
    }
    let location = await Location.getCurrentPositionAsync({
      enabledHighAccuracy: true,
    });

    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    });
  };

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
        }
      );
  }
  useEffect(() => {
    // currentLocation;
    const interval = setInterval(() => {
      userLocation();
    }, 4000);
    return interval;
  }, []);

  const GOOGLE_PLACES_API_KEY = 'AIzaSyD1tKpEXpLgh4ORN6GrX_cjCycgwlbswMg';

  return (
    <View tyle={style.container2}>
      <MapView
        style={style.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_POSITION}
        showsUserLocation={true}
      >
        <Marker coordinate={mapPin}></Marker>
        {/* <Marker
          coordinate={mapRegion}
          pinColor={"linen"}
          draggable={true}
          onDragStart={(e) => {
            console.log("draged", e.nativeEvent.coordinate);
          }}
          onDragEnd={(e) => {
            setMapRegion({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
          }}
        >
          <Callout>
            <Text>i am hear</Text>
          </Callout>
        </Marker> */}
        {/* <Circle center={mapRegion} radius={1000} /> */}
      </MapView>
      <View style={style.searchContainer}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          fetchDetails={true}
          autoFocus={true}
          GooglePlacesSearchQuery={{
            rankby: 'distance',
          }}
          query={{
            key: GOOGLE_PLACES_API_KEY,
            language: 'en',
            components: 'country:in',
            types: 'establishment',
            radius: 3000,
            location: `${mapRegion.latitude}, ${mapRegion.longitude}`,
          }}
          onPress={(data, details = null) => {
            setMapPin({
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            });
          }}
          currentLocation={true}
          currentLocationLabel="current location"
          onFail={(error) => console.error(error)}
          requestUrl={{
            url: 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
            useOnPlatform: 'web',
          }}
          enablePoweredByContainer={false}
          styles={{ textInput: style.inputSearch }}
          predefinedPlaces={[homePlace, workPlace]}
        />
        <View>
          <TouchableOpacity onPress={() => googleSignout()}>
            <Text>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default HomeScreen;
