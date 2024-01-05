import { config } from "@gluestack-ui/config";
import { Button, GluestackUIProvider, ButtonText } from "@gluestack-ui/themed";
import { View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Shadow } from "react-native-shadow-2";

const NavigationBar = () => {
  return (
    <GluestackUIProvider config={config}>
      <Shadow
        distance={10}
        startColor={"#0000001f"}
        radius={8}
        style={styles.shadow}
      >
        <View style={styles.container}>
          <Button style={styles.button} bgColor="disable">
            <MaterialIcons name="home" size={25} color="#1D3F72" />
            <ButtonText style={styles.buttonText}>Home</ButtonText>
          </Button>
          <Button style={styles.button} bgColor="disable">
            <MaterialIcons name="support" size={24} color="#1D3F72" />
            <ButtonText style={styles.buttonText}>Suporte</ButtonText>
          </Button>
          <Button style={styles.button} bgColor="disable">
            <MaterialIcons name="list-alt" size={24} color="#1D3F72" />
            <ButtonText style={styles.buttonText}>Solicitações</ButtonText>
          </Button>
          <Button style={styles.button} bgColor="disable">
            <MaterialIcons name="account-circle" size={24} color="#1D3F72" />
            <ButtonText style={styles.buttonText}>Conta</ButtonText>
          </Button>
        </View>
      </Shadow>
    </GluestackUIProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    width: "100%",
    height: "100%",
  },
  button: {
    flexDirection: "column",
    width: "fit-content",
  },
  buttonText: {
    fontSize: 15,
    color: "#1D3F72",
  },
});

export default NavigationBar;
