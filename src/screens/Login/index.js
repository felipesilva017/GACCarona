import {
  GluestackUIProvider,
  Center,
  Image,
  Button,
  ButtonText,
  VStack,
} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config"; // Optional if you want to use default theme
import { StyleSheet } from "react-native";

const Login = () => {
  return (
    <GluestackUIProvider config={config}>
      <VStack style={styles.container}>
        <Center>
          <Image
            style={styles.image}
            source={require("../../assets/logo-gac-login.png")}
            alt={"Logo Aço cearense"}
            resizeMode="contain"
          ></Image>
        </Center>
        <Button
          style={styles.button}
          bgColor="#1D3F72"
          $active-bgColor="#5699D2"
        >
          <ButtonText>Entrar</ButtonText>
        </Button>
      </VStack>
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
    borderRadius: 8,
    position: "absolute",
    bottom: 20,
  },
});

export default Login;
