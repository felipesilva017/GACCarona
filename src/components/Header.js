import { config } from "@gluestack-ui/config";
import {
  ArrowLeftIcon,
  GluestackUIProvider,
  HStack,
  Image,
  ButtonIcon,
  Button,
  Box,
} from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";
import { Shadow } from "react-native-shadow-2";

const Header = () => {
  return (
    <GluestackUIProvider config={config}>
      <Box w="$full" h="$full">
        <Shadow
          distance={10}
          startColor={"#0000001f"}
          radius={8}
          style={styles.shadow}
        >
          <Box style={styles.content}>
            <Button
              bgColor="$white"
              onPress={() => console.log("Teste")}
              position="absolute"
              left={1}
            >
              <ButtonIcon as={ArrowLeftIcon} color="#1D3F72" w="$6" h="$6" />
            </Button>
            <Image
              resizeMode="contain"
              source={require("../assets/logo-gac.png")}
              alt="Logo GAC"
              // width="$96"
              width={200}
              height={200}
            ></Image>
          </Box>
        </Shadow>
      </Box>
      {/* <Shadow
        distance={10}
        startColor={"#0000001f"}
        radius={8}
        style={styles.shadow}
      ></Shadow> */}
    </GluestackUIProvider>
  );
};

const styles = StyleSheet.create({
  shadow: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    marginTop: 20,
  },
});

export default Header;
