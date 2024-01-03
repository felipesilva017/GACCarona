import {
  GluestackUIProvider,
  Image,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config"; // Optional if you want to use default theme
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <GluestackUIProvider config={config}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/logo-gac-login.png")}
          alt={"Logo Aço cearense"}
          resizeMode="contain"
        ></Image>
        <Button
          style={styles.button}
          bgColor="#1D3F72"
          $active-bgColor="#5699D2"
          onPress={() => navigation.navigate("SignIn")}
        >
          <ButtonText fontWeight="$bold" fontSize={"$sm"}>
            ENTRAR
          </ButtonText>
        </Button>
      </View>
    </GluestackUIProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  button: {
    width: "80%",
    borderRadius: 5,
    position: "absolute",
    bottom: 40,
  },
});

export default Welcome;
