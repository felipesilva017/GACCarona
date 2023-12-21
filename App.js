import {
  GluestackUIProvider,
  Text,
  Box,
  Image,
  Button,
} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config"; // Optional if you want to use default theme
import { StyleSheet } from "react-native";

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Box style={styles.container}>
        <Image
          style={styles.image}
          source={require("./src/assets/logo-gac-login.png")}
          alt={"Logo Aço cearense"}
        ></Image>
        <Button style={styles.button}>
          <Text>Teste</Text>
        </Button>
      </Box>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#ff0000",
  },
  image: {
    borderWidth: 1,
    width: "59%",
  },
  button: {
    marginTop: "60%",
  },
});
