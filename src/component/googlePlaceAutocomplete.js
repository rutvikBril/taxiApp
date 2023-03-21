<GooglePlacesAutocomplete
  placeholder="Search"
  fetchDetails={true}
  autoFocus={true}
  GooglePlacesSearchQuery={{
    rankby: 'distance',
  }}
  query={{
    key: GOOGLE_PLACES_API_KEY,
    language: 'en',
    components: 'country:in',
    types: 'establishment',
    radius: 3000,
    location: `${mapRegion.latitude}, ${mapRegion.longitude}`,
  }}
  onPress={(data, details = null) => {
    setMapPin({
      latitude: details.geometry.location.lat,
      longitude: details.geometry.location.lng,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    });
  }}
  currentLocation={true}
  currentLocationLabel="current location"
  onFail={(error) => console.error(error)}
  requestUrl={{
    url: 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
    useOnPlatform: 'web',
  }}
  enablePoweredByContainer={false}
  styles={{ textInput: style.inputSearch }}
  predefinedPlaces={[homePlace, workPlace]}
/>;
