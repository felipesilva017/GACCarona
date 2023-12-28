import { config } from "@gluestack-ui/config";
import {
  GluestackUIProvider,
  VStack,
  Text,
  Box,
  FormControl,
} from "@gluestack-ui/themed";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import Header from "../../components/Header";

const Form = () => {
  return (
    <GluestackUIProvider config={config}>
      <StatusBar></StatusBar>
      <VStack style={styles.container}>
        <Box style={{ height: "13%" }}>
          <Header />
        </Box>
        <Box style={styles.content}>
          <Text color="#1D3F72" fontSize="$2xl">
            Entrar
          </Text>
          <Box>
            <FormControl></FormControl>
          </Box>
        </Box>
      </VStack>
    </GluestackUIProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    borderWidth: 2,
  },
  content: {
    borderWidth: 5,
    borderColor: "green",
    alignItems: "center",
    height: "100%",
    paddingTop: 20,
  },
});

export default Form;
