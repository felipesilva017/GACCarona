import { View, Text, StyleSheet } from "react-native";
import Header from "../../components/Header";
import {
  ArrowLeftIcon,
  Button,
  ButtonIcon,
  ButtonText,
  GluestackUIProvider,
} from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  return (
    <GluestackUIProvider>
      <View style={styles.container}>
        <View style={{ height: "10%" }}>
          <Header />
        </View>
        <View style={[styles.content, { borderBottomWidth: 1 }]}>
          <Text>Olá, Usuário!</Text>
          <Text>Passageiro</Text>
          <Button style={styles.button} onPress={() => navigation.navigate("")}>
            <ButtonIcon as={ArrowLeftIcon} color="#1D3F72" w="$6" h="$6" />
            <ButtonText>Solicitar Carona</ButtonText>
          </Button>
        </View>

        <View style={styles.content}>
          <Text>Motorista</Text>
          <Button style={styles.button} onPress={() => navigation.navigate("")}>
            <ButtonIcon as={ArrowLeftIcon} color="#1D3F72" w="$6" h="$6" />
            <ButtonText>Procurar carona</ButtonText>
          </Button>
          <Button style={styles.button} onPress={() => navigation.navigate("")}>
            <ButtonIcon as={ArrowLeftIcon} color="#1D3F72" w="$6" h="$6" />
            <ButtonText>Criar possível carona</ButtonText>
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
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: 10,
    width: "90%",
    borderRadius: 5,
  },
});

export default Home;
