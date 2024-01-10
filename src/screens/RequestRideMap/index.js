import { View, StyleSheet, Text, Platform } from "react-native";
import { GluestackUIProvider, Button } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import Header from "../../components/Header";
import NavigationBar from "../../components/NavigationBar";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import { useEffect, useState } from "react";
import * as Location from "expo-location";

const RequestRideMap = () => {
  const navigation = useNavigation();
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  let watchId;

  useEffect(() => {
    requestLocationPermissions();
    () => {
      if (watchId) {
        watchId.remove();
      }
    };
  }, []);

  async function requestLocationPermissions() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.error("Permission to access location was denied");
      return;
    }
    getLocation();
  }

  async function getLocation() {
    let location = await Location.getCurrentPositionAsync({});
    setOrigin(location);

    watchId = Location.watchPositionAsync(
      { accuracy: Location.Accuracy.High, distanceInterval: 1 },
      ({ coords }) => {
        setOrigin(coords);
      }
    );
  }

  return (
    <GluestackUIProvider config={config}>
      <View style={styles.container}>
        <View style={{ height: "8%" }}>
          <Header isHome={false} />
        </View>
        <View style={styles.content}>
          <MapView
            initialRegion={{
              latitude: origin ? origin.latitude : 37.78825,
              longitude: origin ? origin.longitude : -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            region={origin}
            style={styles.map}
            showsUserLocation={true}
            onMapReady={getLocation}
          >
            <Marker
              coordinate={{
                latitude: origin ? origin.latitude : 37.78825,
                longitude: origin ? origin.longitude : -122.4324,
              }}
            />
          </MapView>
          <View style={styles.selectLocation}>
            <Button
              style={[styles.button, styles.boxShadow]}
              onPress={() => navigation.navigate("")}
            >
              <View>
                <Text style={styles.buttonText}>Rua II, 2000</Text>
                <Text style={styles.buttonText}>Rua II, 2000</Text>
              </View>
              <View>
                <Text style={styles.buttonText}>00:00</Text>
              </View>
              <View>
                <Text style={styles.buttonText}>Mudar</Text>
              </View>
            </Button>
          </View>
        </View>
        <View style={{ height: "8%" }}>
          <NavigationBar />
        </View>
      </View>
    </GluestackUIProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  selectLocation: {
    position: "absolute",
    top: "15%",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-evenly",
  },
  button: {
    width: "90%",
    height: "150%",
    borderRadius: 8,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 60,
  },
  buttonText: {
    color: "#1D3F72",
    fontSize: 13,
    fontWeight: "bold",
  },

  leftSide: {},
});

const generateBoxShadowStyle = (
  xOffset,
  yOffset,
  shadowColorIos,
  shadowOpacity,
  shadowRadius,
  elevation,
  shadowColorAndroid
) => {
  if (Platform.OS === "ios") {
    styles.boxShadow = {
      shadowColor: shadowColorIos,
      shadowOffset: { width: xOffset, height: yOffset },
      shadowOpacity,
      shadowRadius,
    };
  } else if (Platform.OS === "android") {
    styles.boxShadow = {
      elevation,
      shadowColor: shadowColorAndroid,
    };
  }
};

generateBoxShadowStyle(-2, 20, "#171717", 0.2, 3, 4, "#171717");

export default RequestRideMap;
