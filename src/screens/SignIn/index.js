import { config } from "@gluestack-ui/config";
import { ButtonText, GluestackUIProvider } from "@gluestack-ui/themed";
import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";
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

export default SignIn;
