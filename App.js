import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import Login from "./src/screens/Login";
import Form from "./src/screens/Form";

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      {/* <Login /> */}
      <Form />
    </GluestackUIProvider>
  );
}
