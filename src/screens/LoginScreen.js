import React, { useEffect, useState } from "react";
import {
  Alert,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import style from "../styles/loginScreenStyle";
import app from "../../firbaseConfig";

import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [getValue, setGetValue] = useState("");

  const navigation = useNavigation();

  const auth = getAuth(app);

  const onPressLogin = () => {
    if (email === "" && password === "") {
      Alert.alert("Enter details to signin!");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log("user form login: " + user.email);
          // console.log("email form login: " + auth.currentUser.email);
        })
        .then(() => {
          setEmail({ email: "" });
          setPassword({ password: "" });
          navigation.navigate("Home");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };

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
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Text style={style.labelTextStyle}>Password</Text>
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={style.textInputStyle}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity
            style={style.logInButton}
            onPress={() => onPressLogin()}
          >
            <Text>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onForgotPress()}>
            <View style={style.alreadyAccountViewContainer}>
              <Text style={style.alreadyAccountViewContainerText}>
                Forgot Pasword ?
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
