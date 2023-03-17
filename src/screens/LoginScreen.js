import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styles from "../styles/loginScreenStyle";
import React, { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import style from '../styles/loginScreenStyle';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const auth = getAuth();

  const onPressLogin = () => {
    if (email === '' && password === '') {
      Alert.alert('Enter details to signin!');
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          setEmail({ email: '' });
          setPassword({ password: '' });
          navigation.navigate('Home');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };

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
    <SafeAreaView style={style.container}>
      <View>
        <View style={style.logInTextView}>
          <Text style={style.LoginText}>Login </Text>
        </View>
        <View style={style.formView}>
          <Text style={style.labelTextStyle}>Email or UserName</Text>
          <TextInput
            placeholder="Username or Email"
            keyboardType={'email-address'}
            style={style.textInputStyle}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Text style={style.labelTextStyle}>Password</Text>
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={style.textInputStyle}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity
            style={style.logInButton}
            onPress={() => onPressLogin()}
          >
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
