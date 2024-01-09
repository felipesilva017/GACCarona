import { config } from "@gluestack-ui/config";
import { Button, GluestackUIProvider, ButtonText } from "@gluestack-ui/themed";
import { styles } from "./styles";
import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Shadow } from "react-native-shadow-2";
import { useNavigation } from "@react-navigation/native";

export const NavigationBar = () => {
  const navigation = useNavigation();
  return (
    <GluestackUIProvider config={config}>
      <Shadow distance={10} startColor={"#0000001f"} radius={8}>
        <View style={styles.container}>
          <Button
            style={styles.button}
            bgColor="disable"
            onPress={() => navigation.navigate("Home")}
          >
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

export default NavigationBar;
