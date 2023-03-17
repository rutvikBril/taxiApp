import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";

import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const ForgotScreen = () => {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.forgotPassTextView}>
        <Text style={style.forgotPassText}>Forgot Password</Text>
      </View>
      <View style={style.formView}>
        <Text style={style.labelTextStyle}>Email</Text>
        <TextInput
          placeholder="Email"
          keyboardType={"email-address"}
          style={style.textInputStyle}
        />
        <TouchableOpacity style={style.forgotInButton}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgotScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  forgotPassTextView: {
    marginTop: 30,
    marginLeft: 20,
  },
  forgotPassText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  formView: {
    margin: 20,
    marginHorizontal: 25,
  },
  labelTextStyle: {
    marginTop: 20,
    fontSize: 15,
  },
  textInputStyle: {
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#f5ad00",
  },
  forgotInButton: {
    alignItems: "center",
    marginTop: "20%",
    margin: 10,
    paddingVertical: 20,
    borderRadius: 20,
    backgroundColor: "#f5ad00",
  },
});
