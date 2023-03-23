import MapView from 'react-native-maps';
import style from '../styles/homeScreenStyle';
const Mapview = () => {
  return (
    <MapView
      style={style.map}
      provider="google"
      initialRegion={{
        latitude: 23.0786648,
        longitude: 72.5029199,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      userLocationPriority={'high'}
      followsUserLocation={'true'}
      zoomTapEnabled
      zoomEnabled
      loadingEnabled
      loadingIndicatorColor="#606060"
      showsUserLocation
      moveOnMarkerPress></MapView>
  );
};

export default Mapview;
