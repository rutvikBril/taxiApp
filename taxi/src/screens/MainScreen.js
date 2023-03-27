import React, {useEffect, useState} from 'react';
import {Dimensions, Pressable, TextInput, TouchableOpacity} from 'react-native';
import {getAuth, onAuthStateChanged, signOut} from 'firebase/auth';

import {View, Text} from 'react-native';
import style from '../styles/homeScreenStyle';
import MapviewComponent from '../components/MapView';
import GooglePlacesInput from '../components/GooglePlacesAutocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const onPressSearch = () => {
    navigation.navigate('PickupDrop');
  };

  return (
    <View style={style.container}>
      <MapviewComponent />
      <TouchableOpacity
        style={style.searchForrideViewStyle}
        onPress={() => onPressSearch()}>
        <View style={style.searchForrideViewStyle}>
          <Text style={style.searchTextInputStyle}>
            <Ionicons name="search" color="black" size={20} />
            {'\b'}Search for ride
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default HomeScreen;
