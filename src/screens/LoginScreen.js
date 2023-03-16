import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import style from "../styles/loginScreenStyle";

const LoginScreen = () => {
  return (
    <SafeAreaView style={style.container}>
      <View>
        <View style={style.logInTextView}>
          <Text style={style.LoginText}>Login </Text>
        </View>
        <View style={style.formView}>
          <Text style={style.labelTextStyle}>Email or UserName</Text>
          <TextInput
            placeholder="Username or Email"
            keyboardType={"email-address"}
            style={style.textInputStyle}
          />
          <Text style={style.labelTextStyle}>Password</Text>
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={style.textInputStyle}
          />
          <TouchableOpacity style={style.logInButton}>
            <Text>Sing In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
