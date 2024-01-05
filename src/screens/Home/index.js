import { View, Text, StyleSheet } from "react-native";
import Header from "../../components/Header";
import { Button, ButtonText, GluestackUIProvider } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import NavigationBar from "../../components/NavigationBar";
import { MaterialIcons } from "@expo/vector-icons";

const Home = () => {
  const navigation = useNavigation();

  return (
    <GluestackUIProvider>
      <View style={styles.container}>
        <View style={{ height: "10%" }}>
          <Header isHome={true} isDisable={true} />
        </View>
        <View
          style={[
            styles.content,
            { borderBottomWidth: 0.5, borderColor: "#ccc" },
          ]}
        >
          <Text style={styles.title}>Olá, Usuário!</Text>
          <Text style={styles.typeUser}>Passageiro</Text>
          <Button
            style={[styles.button, styles.boxShadow]}
            onPress={() => navigation.navigate("")}
          >
            <MaterialIcons
              style={styles.buttonIcon}
              name="directions-car"
              size={22}
              color="#1D3F72"
            />
            <ButtonText style={styles.buttonText}>Solicitar carona</ButtonText>
          </Button>
        </View>

        <View style={styles.content}>
          <Text style={styles.typeUser}>Motorista</Text>
          <Button
            style={[styles.button, styles.boxShadow]}
            onPress={() => navigation.navigate("")}
          >
            <MaterialIcons
              style={styles.buttonIcon}
              name="search"
              size={22}
              color="#1D3F72"
            />
            <ButtonText style={styles.buttonText}>Procurar carona</ButtonText>
          </Button>
          <Button
            style={[styles.button, styles.boxShadow]}
            onPress={() => navigation.navigate("")}
          >
            <MaterialIcons
              style={styles.buttonIcon}
              name="add"
              size={22}
              color="#1D3F72"
            />
            <ButtonText style={styles.buttonText}>
              Criar possível carona
            </ButtonText>
          </Button>
        </View>
        <View style={{ height: "10%" }}>
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
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  button: {
    marginTop: 10,
    width: "70%",
    borderRadius: 20,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  buttonText: {
    color: "#1D3F72",
  },

  buttonIcon: {
    position: "absolute",
    top: "20%",
    left: "15%",
  },
  title: {
    color: "#1D3F72",
    fontWeight: "900",
    fontSize: 30,
    textShadowColor: "rgba(0, 0, 0, 0.20)",
    textShadowOffset: { width: 1, height: 4 },
    textShadowRadius: 1,
  },
  typeUser: {
    color: "#1D3F72",
    fontWeight: "500",
    fontSize: 20,
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

export default Home;
