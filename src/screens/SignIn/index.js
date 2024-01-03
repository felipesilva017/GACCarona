import { config } from "@gluestack-ui/config";
import { GluestackUIProvider, FormControl } from "@gluestack-ui/themed";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import Header from "../../components/Header";

const SignIn = () => {
  return (
    <GluestackUIProvider config={config}>
      <View style={styles.container}>
        <View style={{ height: "10%" }}>
          <Header />
        </View>
        <View style={styles.content}>
          <Text color="#1D3F72" style={{ borderWidth: 2 }}>
            Entrar
          </Text>
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
    // borderWidth: 5,
    // borderColor: "green",
    alignItems: "center",
    height: "100%",
    paddingTop: 20,
  },
});

export default SignIn;
