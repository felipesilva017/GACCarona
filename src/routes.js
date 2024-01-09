import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./screens/SignIn";
import Welcome from "./screens/Welcome";
import Home from "./screens/Home";
import RequestRideMap from "./screens/RequestRideMap";

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
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Home}
      />
      <Stack.Screen
        name="RequestRideMap"
        options={{ headerShown: false }}
        component={RequestRideMap}
      />
    </Stack.Navigator>
  );
}
