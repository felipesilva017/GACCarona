import { config } from "@gluestack-ui/config";
import { ButtonText, GluestackUIProvider } from "@gluestack-ui/themed";
import { StyleSheet, View, Text, TextInput } from "react-native";
import Header from "../../components/Header";
import { Button } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const SignIn = () => {
  const navigation = useNavigation();

  const [user, setuser] = useState("");

  const [password, setPassword] = useState("");

  return (
    <GluestackUIProvider config={config}>
      <View style={styles.container}>
        <View style={{ height: "10%" }}>
          <Header />
        </View>
        <View style={styles.form}>
          <Text style={styles.formTitle}>Entrar</Text>
          <TextInput
            placeholder="Digite seu usuário"
            placeholderTextColor="#1D3F72"
            onChangeText={setuser}
            value={user}
            style={styles.formInput}
          />
          <TextInput
            placeholder="Digite sua senha"
            placeholderTextColor="#1D3F72"
            onChangeText={setPassword}
            value={password}
            style={styles.formInput}
            secureTextEntry={true}
          />
          <Button
            style={styles.button}
            bgColor="#1D3F72"
            $active-bgColor="#5699D2"
            onPress={() => navigation.navigate("Home")}
          >
            <ButtonText fontWeight="$bold" fontSize={"$sm"}>
              ENTRAR
            </ButtonText>
          </Button>
        </View>
      </View>
    </GluestackUIProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    // borderWidth: 5,
    // borderColor: "green",
    alignItems: "center",
    height: "100%",
    paddingTop: 20,
  },
  formTitle: {
    alignSelf: "flex-start",
    marginLeft: "5%",
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: 30,
    color: "#1D3F72",
    marginBottom: 20,
  },
  formInput: {
    width: "90%",
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#1D3F72",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 30,
  },
  button: {
    marginTop: 10,
    width: "90%",
    borderRadius: 5,
  },
});

export default SignIn;
