import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

import Auth from "./screens/AuthScreen/Auth";
import Home from "./screens/HomeScreen/Home";
import EventForm from "./screens/CalenderScreen/EventForm";
import Event from "./screens/CalenderScreen/Event";
import History from "./screens/HistoryScreen/History";
import Notification from "./screens/NotificationsScreen/Notification";
import { EventContextProvider } from "./store/context/event-context";

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
    <EventContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Auth">
          <Stack.Screen
            name="Auth"
            component={Auth}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={({ navigation }) => ({
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
                      onPress={() => navigation.navigate("Notification")}
                    />
                    <Ionicons
                      name="refresh-outline"
                      size={24}
                      color="black"
                      style={{ marginRight: 15, transform: [{ scaleX: -1 }] }}
                      onPress={() => navigation.navigate("History")}
                    />
                  </View>
                </React.Fragment>
              ),
            })}
          />
          <Stack.Screen
            name="EventForm"
            component={EventForm}
            options={() => ({
              headerTitleAlign: "center",
              title: "",
            })}
          />
          <Stack.Screen
            name="Event"
            component={Event}
            options={() => ({
              headerTitleAlign: "center",
              title: "",
              headerLeft: null,
            })}
          />
          <Stack.Screen
            name="History"
            component={History}
            options={({ navigation }) => ({
              headerTitleAlign: "center",
              title: "History",
              headerLeft: () => (
                <Ionicons
                  name="chevron-back"
                  size={24}
                  color="black"
                  style={{ marginLeft: 15 }}
                  onPress={() => navigation.navigate("Home")}
                />
              ),
            })}
          />
          <Stack.Screen
            name="Notification"
            component={Notification}
            options={({ navigation }) => ({
              headerTitleAlign: "center",
              title: "Notification",
              headerLeft: () => (
                <Ionicons
                  name="chevron-back"
                  size={24}
                  color="black"
                  style={{ marginLeft: 15 }}
                  onPress={() => navigation.navigate("Home")}
                />
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </EventContextProvider>
  );
}
