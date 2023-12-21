import { GluestackUIProvider, Text, Box, Center } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config"; // Optional if you want to use default theme
import { Button } from "@gluestack-ui/config/build/theme";

const Login = () => {
  return (
    <GluestackUIProvider config={config}>
      <Box width="100%" justifyContent="center" alignItems="center">
        <Center>
          <Text>GACCarona</Text>
          <Button>Clique aqui</Button>
        </Center>
      </Box>
    </GluestackUIProvider>
  );
};

export default Login;
