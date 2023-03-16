import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styles from "../styles/loginScreenStyle";

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.textHeading}>Login Here</Text>
        <TextInput
          placeholder="Username or Email"
          keyboardType={"email-address"}
          style={styles.inputfield}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.inputfield}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
