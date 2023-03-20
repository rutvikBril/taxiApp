import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import Constants from "expo-constants";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const HomeScreen = () => {
  const [mapRegion, setMapRegion] = useState({
    latitude: 20.5937,
    longitude: 78.9629,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
    }
    let location = await Location.getCurrentPositionAsync({
      enabledHighAccuracy: true,
    });
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };
  useEffect(() => {
    const interval = setInterval(() => {
      userLocation();
    }, 4000);
  }, []);

  const GOOGLE_PLACES_API_KEY = "AIzaSyCFCozWRqehqsFbbe4mAAz2yw4IlJsnOEw";
  return (
    <SafeAreaView style={style.container}>
      <View style={style.container2}>
        <MapView style={style.map} region={mapRegion}>
          <Marker coordinate={mapRegion} title="Marker" />
          <GooglePlacesAutocomplete
            placeholder="Search"
            query={{
              key: GOOGLE_PLACES_API_KEY,
              language: "en",
            }}
            onPress={(data, details = null) => console.log(data)}
            onFail={(error) => console.error(error)}
            requestUrl={{
              url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api",
              useOnPlatform: "web",
            }}
          />
        </MapView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  container2: {
    flex: 1,
    padding: 10,
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: "#ecf0f1",
  },
});
