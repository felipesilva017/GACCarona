import { config } from "@gluestack-ui/config";
import {
  ArrowLeftIcon,
  GluestackUIProvider,
  HStack,
  Image,
  VStack,
  ButtonIcon,
  Button,
} from "@gluestack-ui/themed";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Shadow } from "react-native-shadow-2";

const Form = () => {
  return (
    <GluestackUIProvider config={config}>
      <StatusBar></StatusBar>
      <VStack style={styles.container}>
        <Shadow
          distance={10}
          startColor={"#0000001f"}
          radius={8}
          style={styles.shadow}
        >
          <HStack style={styles.header}>
            <Button
              style={styles.arrow}
              bgColor="$white"
              onPress={() => console.log("Teste")}
            >
              <ButtonIcon as={ArrowLeftIcon} color="#1D3F72" w="$6" h="$6" />
            </Button>
            <Image
              style={styles.image}
              resizeMode="contain"
              source={require("../../assets/logo-gac.png")}
              alt="Logo GAC"
            ></Image>
          </HStack>
        </Shadow>
      </VStack>
    </GluestackUIProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
  },
  shadow: {
    width: "100%",
    height: "38%",
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 25,
  },
  image: {
    width: 200,
    height: 200,
  },
  arrow: {
    position: "absolute",
    left: 1,
  },
});

export default Form;
