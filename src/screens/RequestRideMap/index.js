import { View, StyleSheet, Text, Platform } from "react-native";
import { GluestackUIProvider, Button } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import Header from "../../components/Header";
import NavigationBar from "../../components/NavigationBar";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import { useEffect, useState, useRef } from "react";
import {
  watchPositionAsync,
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationAccuracy,
} from "expo-location";

const RequestRideMap = () => {
  const navigation = useNavigation();
  const [location, setLocation] = useState(null);
  const [destination, setDestination] = useState(null);

  const mapRef = useRef(null);

  useEffect(() => {
    (async () => {
      let { status } = await requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  useEffect(() => {
    watchPositionAsync(
      {
        accurancy: LocationAccuracy.Highest,
        timeInterval: 1000,
        distanceInterval: 1,
      },
      (response) => {
        console.log("Nova localização", response);
        setLocation(response);
        mapRef.current?.animateCamera({
          center: response.coords,
        });
      }
    );
  }, []);

  return (
    <GluestackUIProvider config={config}>
      <View style={styles.container}>
        <View style={{ height: "8%" }}>
          <Header isHome={false} />
        </View>
        <View style={styles.content}>
          <MapView
            ref={mapRef}
            initialRegion={{
              latitude: location ? location.coords.latitude : 37.78825,
              longitude: location ? location.coords.longitude : -122.4324,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
            style={styles.map}
            rotateEnabled={false}
            maxZoomLevel={30}
            minZoomLevel={13}
          >
            {location && (
              <Marker
                coordinate={{
                  latitude: location ? location.coords.latitude : 37.78825,
                  longitude: location ? location.coords.longitude : -122.4324,
                }}
                // style={{ display: location ? "" : "none" }}
              />
            )}
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
    borderWidth: 2,
    width: "90%",
    height: "12%",
    position: "absolute",
    top: "12%",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-evenly",
  },
  button: {
    flex: 1,
    width: "100%",
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
