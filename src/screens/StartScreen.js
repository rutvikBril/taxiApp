import React from "react";

import {
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import style from "../styles/startScreenStyle";
import { useNavigation } from "@react-navigation/native";

const StartScreen = () => {
  const navigation = useNavigation();
  const onPressLogin = () => {
    navigation.navigate("LoginScreen");
  };
  const onPressStart = () => {
    navigation.navigate("Registration");
  };

  return (
    <View style={style.container}>
      <ImageBackground
        source={require("../img/firstScreenImage.png")}
        style={style.backGroundImageStyle}
        resizeMode="contain"
      >
        <View style={style.welcomeTextView}>
          <Text style={style.welcomeText}>
            Welcome to
            {"\n"}Smart Taxi
          </Text>
        </View>
        <View>
          <View>
            <TouchableOpacity
              style={style.getStartView}
              onPress={() => onPressStart()}
            >
              <Text style={style.getStartButtonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
          <View style={style.alreadyAccountViewContainer}>
            <Text style={style.alreadyAccountViewContainerText}>
              Already have a account?
            </Text>
            <TouchableOpacity onPress={() => onPressLogin()}>
              <Text style={style.loginButtonText}> Login </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default StartScreen;
