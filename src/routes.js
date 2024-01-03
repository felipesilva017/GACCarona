import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./screens/SignIn";
import Welcome from "./screens/Welcome";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        options={{ headerShown: false }}
        component={Welcome}
      />
      <Stack.Screen
        name="SignIn"
        options={{ headerShown: false }}
        component={SignIn}
      />
    </Stack.Navigator>
  );
}
