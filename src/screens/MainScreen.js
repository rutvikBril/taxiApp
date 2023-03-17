import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const HomeScreen = () => {
  const [mapRegion, setMapRegion] = useState({
    latitude: 37.76625,
    longitude: -122.4324,
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
  let i = 1;
  useEffect(() => {
    const interval = setInterval(() => {
      userLocation();
    }, 5000);
  }, []);
  return (
    <SafeAreaView style={style.container}>
      <View>
        <MapView style={style.map} region={mapRegion}>
          <Marker coordinate={mapRegion} title="Marker" />
        </MapView>
import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { View } from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>MainScreen</Text>
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
});

