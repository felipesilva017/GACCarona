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

  useEffect(() => {
    requestLocationPermissions();
  }, []);

  async function requestLocationPermissions() {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (granted) {
      const location = await Location.getCurrentPositionAsync();
      setOrigin(location);
    }
  }

  return (
    <GluestackUIProvider config={config}>
      <View style={styles.container}>
        <View style={{ height: "8%" }}>
          <Header isHome={false} />
        </View>
        <View style={styles.content}>
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
          <MapView
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            style={styles.map}
          >
            <Marker
              coordinate={{
                latitude: 37.78825,
                longitude: -122.4324,
              }}
            />
          </MapView>
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
    zIndex: 0,
    flex: 1,
  },
  selectLocation: {
    zIndex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  button: {
    position: "absolute",
    width: "90%",
    height: "12%",
    top: "5%",
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
