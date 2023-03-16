import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import style from "../styles/registrationScreenStyle";

const RegistrationScreen = () => {
  return (
    <SafeAreaView style={style.container}>
      <KeyboardAvoidingView style={style.container}>
        <ScrollView>
          <View>
            <View style={style.singUpTextView}>
              <Text style={style.singUpText}>Sing Up</Text>
            </View>
            <View style={style.formView}>
              <Text style={style.labelTextStyle}>Email</Text>
              <TextInput
                placeholder="test@gmail.com"
                style={style.textInputStyle}
                keyboardType={"email-address"}
              />
              <Text style={style.labelTextStyle}>User Name</Text>
              <TextInput placeholder="Test " style={style.textInputStyle} />
              <Text style={style.labelTextStyle}>Mobile </Text>
              <TextInput
                placeholder="1234567890"
                style={style.textInputStyle}
                keyboardType={"numeric"}
              />
              <Text style={style.labelTextStyle}>Password</Text>
              <TextInput style={style.textInputStyle} secureTextEntry={true} />
              <Text style={style.labelTextStyle}>Conform Password</Text>
              <TextInput style={style.textInputStyle} secureTextEntry={true} />
              <TouchableOpacity style={style.singUpButton}>
                <Text>Sing Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegistrationScreen;
