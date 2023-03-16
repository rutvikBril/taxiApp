import React from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import style from "../styles/registrationScreenStyle";

const LoginScreen = () => {
  return (
    <SafeAreaView
      style={{ justifyContent: "center", flex: 1, marginTop: "40%" }}
    >
      <KeyboardAvoidingView style={style.container}>
        <ScrollView>
          <View>
            <View style={style.singUpTextView}>
              <Text style={style.singUpText}>Login Here</Text>
              <View style={style.formView}>
                <Text style={style.labelTextStyle}>Username or Email</Text>
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
                <TouchableOpacity style={style.singUpButton}>
                  <Text>Sing In</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
