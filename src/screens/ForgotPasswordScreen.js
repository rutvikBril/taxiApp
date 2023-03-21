import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const ForgotScreen = () => {
  const [email, setEmail] = useState('');

  const auth = getAuth();

  const onPressSubmit = () => {
    if (email === '') {
      Alert.alert('Enter email ');
    } else {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          setEmail({ email: '' });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <View style={style.forgotPassTextView}>
        <Text style={style.forgotPassText}>Forgot Password</Text>
      </View>
      <View style={style.formView}>
        <Text style={style.labelTextStyle}>Email</Text>
        <TextInput
          placeholder="Email"
          keyboardType={'email-address'}
          style={style.textInputStyle}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TouchableOpacity
          style={style.forgotInButton}
          onPress={() => onPressSubmit()}
        >
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
    justifyContent: 'flex-start',
  },
  forgotPassTextView: {
    marginTop: 30,
    marginLeft: 20,
  },
  forgotPassText: {
    fontSize: 30,
    fontWeight: 'bold',
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
    borderBottomColor: '#f5ad00',
  },
  forgotInButton: {
    alignItems: 'center',
    marginTop: '20%',
    margin: 10,
    paddingVertical: 20,
    borderRadius: 20,
    backgroundColor: '#f5ad00',
  },
});
