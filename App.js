import React, { useEffect } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

import Home from "./screens/HomeScreen/Home";

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-SemiBold.ttf"),
    "open-sans-reg": require("./assets/fonts/OpenSans-Regular.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitleAlign: "center",
            headerLeft: () => (
              <Ionicons
                name="funnel-outline"
                size={24}
                color="black"
                style={{ marginLeft: 15 }}
                onPress={() => console.log("Menu icon pressed")}
              />
            ),
            headerRight: () => (
              <React.Fragment>
                <View style={{ flexDirection: "row", marginRight: 15 }}>
                  <Ionicons
                    name="notifications-outline"
                    size={24}
                    color="black"
                    style={{ marginRight: 15 }}
                    onPress={() => console.log("Bell icon pressed")}
                  />
                  <Ionicons
                    name="albums-outline"
                    size={24}
                    color="black"
                    style={{ marginRight: 15 }}
                    onPress={() => console.log("More icon pressed")}
                  />
                </View>
              </React.Fragment>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
