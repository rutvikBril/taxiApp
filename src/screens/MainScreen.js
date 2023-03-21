import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import style from "../styles/mainScreenStyle";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const HomeScreen = () => {
  const auth = getAuth();
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

  function googleSignout() {
    auth
      .signOut()

      .then(
        function () {
          console.log("Signout Succesfull");
        },
        function (error) {
          console.log("Signout Failed");
        }
      );
  }
  useEffect(() => {
    const interval = setInterval(() => {
      userLocation();
      console.log("currentUser", auth.currentUser);
      return interval;
    }, 5000);
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <View>
        <MapView style={style.map} region={mapRegion}>
          <Marker coordinate={mapRegion} title="Marker" />
        </MapView>
      </View>
      <View>
        <TouchableOpacity onPress={() => googleSignout()}>
          <Text>Log Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
