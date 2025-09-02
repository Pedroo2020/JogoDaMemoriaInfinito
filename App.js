import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import FormScreen from "./screens/FormScreen";

export default function App() {

    const Stack = createNativeStackNavigator();

    return (
      <NavigationContainer>
          <Stack.Navigator >
              <Stack.Screen options={{ headerShown: false }}
                            name={"Form"}
                            component={FormScreen} />

              <Stack.Screen options={{ headerShown: false }}
                        name={"Home"}
                        component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}