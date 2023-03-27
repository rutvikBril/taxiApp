import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import {getAuth, onAuthStateChanged} from 'firebase/auth';
// import app from '../../firbaseConfig';
import auth from '@react-native-firebase/auth';

const SplashScreen = () => {
  const navigation = useNavigation();

  // const auth = getAuth(app);

  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      5000;
      return subscriber;
    });
  }, []);
  if (initializing) return null;
  if (!user) {
    return navigation.navigate('StartScreen');
  } else {
    navigation.navigate('Home');
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f5ad00'}}>
      <View style={styles.container}>
        <Image
          source={require('../img/firstScreenImage.png')}
          style={{
            width: '90%',
            resizeMode: 'contain',
            margin: 30,
          }}
        />
        <ActivityIndicator
          animating={animating}
          color="#FFFFFF"
          size="large"
          style={styles.activityIndicator}
        />
      </View>
      <Text
        style={{
          fontSize: 18,
          textAlign: 'center',
          color: '#FFFFFF',
        }}>
        Taxi App
      </Text>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});

// onAuthStateChanged(auth, () => {
//   if (!user) {
//     console.log('email form splash: ', user.email);
//     // const uid = user.uid;
//     navigation.navigate('StartScreen');
//     console.log(' user not logged in');
//   } else {
//     navigation.navigate('Home');
//     console.log('user already loggen in');
//   }
// });
