import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

import Home from "./screens/HomeScreen/Home";
import EventForm from "./screens/CalenderScreen/EventForm";
import Event from "./screens/CalenderScreen/Event";

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
                    name="refresh-outline"
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
        <Stack.Screen
          name="EventForm"
          component={EventForm}
          options={({ navigation }) => ({
            headerTitleAlign: "center",
            title: "",
            headerLeft: () => (
              <Ionicons
                name="close"
                size={24}
                color="black"
                style={{ marginLeft: 15 }}
                onPress={() => navigation.goBack()}
              />
            ),
            headerRight: () => (
              <TouchableOpacity
                style={{
                  backgroundColor: "blue",
                  padding: 5,
                  borderRadius: 125,
                  marginRight: 10,
                  width: 75,
                }}
                onPress={() => {
                  navigation.navigate("Event");
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 15,
                    textAlign: "center",
                    fontFamily: "open-sans",
                  }}
                >
                  Create
                </Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Event"
          component={Event}
          options={({ navigation }) => ({
            headerTitleAlign: "center",
            title: "",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
