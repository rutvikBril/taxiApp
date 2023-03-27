import {Dimensions, StyleSheet} from 'react-native';

const style = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //   },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  container2: {
    // padding: 10,
    // paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    zIndex: 2,
    marginTop: '20%',
    alignSelf: 'center',
    position: 'absolute',
    width: '90%',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    padding: 8,
    borderRadius: 8,
  },
  inputSearch: {
    borderColor: '#888',
    borderWidth: 1,
    color: 'black',
  },
});

export default style;
