import React from 'react';
import {getAuth, onAuthStateChanged, signOut} from 'firebase/auth';
import {View, Text, Button} from 'react-native';
import Mapview from '../components/MapView';
import app from '../../firbaseConfig';
import {collection, addDoc, getFirestore} from 'firebase/firestore';
import {TouchableOpacity} from 'react-native-gesture-handler';

//Firebase
const db = getFirestore(app);

const saveData = async () => {
  try {
    console.log('pressed');
    const docRef = await addDoc(collection(db, 'Users'), {
      FirstName: 'Parth',
      LastName: 'chauhan',
      Bornyear: '2001',
    });
    console.log('====================================');
    console.log(docRef);
    console.log('succes: ' + docRef.id);
    console.log('====================================');
  } catch (e) {
    console.error('Error: ' + e);
  }
};

const HomeScreen = () => {
  const auth = getAuth();

  function googleSignout() {
    auth
      .signOut()

      .then(
        function () {
          console.log('Signout Succesfull');
        },
        function (error) {
          console.log('Signout Failed');
        },
      );
  }

  return (
    <View>
      <View style={{marginTop: 10}}>
        <TouchableOpacity onPress={() => saveData()}>
          <Text>Log Out</Text>
        </TouchableOpacity>
      </View>
      <Mapview />
    </View>
  );
};
export default HomeScreen;
