import { config } from "@gluestack-ui/config";
import {
  ArrowLeftIcon,
  GluestackUIProvider,
  Image,
  ButtonIcon,
  Button,
} from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { Shadow } from "react-native-shadow-2";

const Header = (props) => {
  const navigation = useNavigation();

  return (
    <GluestackUIProvider config={config}>
      <Shadow
        distance={10}
        startColor={"#0000001f"}
        radius={8}
        style={styles.shadow}
      >
        <View style={styles.content}>
          <Button
            opacity={props.isHome ? 0 : 1}
            disabled={props.isDisable}
            bgColor="disable"
            onPress={() => navigation.goBack()}
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
        </View>
      </Shadow>
    </GluestackUIProvider>
  );
};

const styles = StyleSheet.create({
  shadow: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    // borderWidth: 2,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    // borderWidth: 2,
  },
});

export default Header;
