import { View, Text } from "react-native";
import Header from "../../components/Header";
import { Button, ButtonText, GluestackUIProvider } from "@gluestack-ui/themed";
import { styles } from "./styles";
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
