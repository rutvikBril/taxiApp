import {Dimensions, StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  searchForrideViewStyle: {},
  searchTextInputStyle: {
    padding: 10,
    marginBottom: 30,
    margin: 10,
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#000000',
    backgroundColor: 'white',
  },
  searchContainer: {
    alignSelf: 'center',
    position: 'absolute',
    marginTop: '10%',
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
  },
});

export default style;
