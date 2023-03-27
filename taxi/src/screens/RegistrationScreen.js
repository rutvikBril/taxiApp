import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from 'react-native';
import style from '../styles/registrationScreenStyle';
import {useNavigation} from '@react-navigation/native';
import firebase from '../../firbaseConfig';
// import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import auth from '@react-native-firebase/auth';

const RegistrationScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [mobile, setMobile] = useState('');

  const navigation = useNavigation();

  const userRegistration = () => {
    if (email === '' && password === '') {
      Alert.alert('Enter details to signup!');
    } else {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          setEmail({email: ''});
          setPassword({password: ''});
          navigation.navigate('LoginScreen');
        })
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <KeyboardAvoidingView style={style.container}>
        <ScrollView>
          <View>
            <View style={style.singUpTextView}>
              <Text style={style.singUpText}>Sing Up</Text>
            </View>
            <View style={style.formView}>
              <Text style={style.labelTextStyle}>User Name</Text>
              <TextInput
                placeholder="Test "
                style={style.textInputStyle}
                value={userName}
                onChangeText={text => setUserName(text)}
              />
              <Text style={style.labelTextStyle}>Email</Text>
              <TextInput
                placeholder="test@gmail.com"
                style={style.textInputStyle}
                keyboardType={'email-address'}
                value={email}
                onChangeText={text => setEmail(text)}
              />
              <Text style={style.labelTextStyle}>Mobile </Text>
              <TextInput
                placeholder="1234567890"
                style={style.textInputStyle}
                keyboardType={'numeric'}
                value={mobile}
                onChangeText={text => setMobile(text)}
              />
              <Text style={style.labelTextStyle}>Password</Text>
              <TextInput
                style={style.textInputStyle}
                secureTextEntry={true}
                value={password}
                onChangeText={text => setPassword(text)}
              />
              <TouchableOpacity
                style={style.singUpButton}
                onPress={() => userRegistration()}>
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
