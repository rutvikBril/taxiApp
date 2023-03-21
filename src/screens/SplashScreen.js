import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../../firbaseConfig";

const SplashScreen = () => {
  const navigation = useNavigation();

  const auth = getAuth(app);
  const user = auth.currentUser;

  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);

      onAuthStateChanged(auth, () => {
        if (user) {
          console.log("email form splash: " + auth.currentUser.email);
          // const uid = user.uid;
          navigation.navigate("Home");
          console.log("user already loggen in");
        } else {
          navigation.navigate("StartScreen");
          console.log("user not logged in");
        }
      });

      5000;
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5ad00" }}>
      <View style={styles.container}>
        <Image
          source={require("../img/firstScreenImage.png")}
          style={{
            width: "90%",
            resizeMode: "contain",
            margin: 30,
          }}
        />
        <ActivityIndicator
          animating={animating}
          color="#FFFFFF"
          size="large"
          style={styles.activityIndicator}
        />
      </View>
      <Text
        style={{
          fontSize: 18,
          textAlign: "center",
          color: "#FFFFFF",
        }}
      >
        Taxi App
      </Text>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  activityIndicator: {
    alignItems: "center",
    height: 80,
  },
});
