import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import FormScreen from "./screens/FormScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import { ActivityIndicator, View } from "react-native";

export default function App() {
    const [fontsLoaded] = useFonts({
        Lobster: require("./assets/fonts/Lobster-Regular.ttf"),
    });

    if (!fontsLoaded) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" color="#8B0000" />
            </View>
        );
    }

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Form"
                    component={FormScreen}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Home"
                    component={HomeScreen}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="GameOverScreen"
                    component={GameOverScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
