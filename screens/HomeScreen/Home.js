import React from "react";
import { View, Text, StyleSheet } from "react-native";

import CalenderView from "../CalenderScreen/CalenderView";
import AddButton from "../../components/AddBtn/AddButton";

const Home = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      // your options here
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.line} />
        <Text style={styles.text}>Upcomming</Text>
      </View>
      <CalenderView />
      <View style={styles.addButtonContainer}>
        <AddButton onPress={() => navigation.navigate("EventForm")} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efefef",
  },
  innerContainer: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  line: {
    height: 30,
    width: 3,
    backgroundColor: "blue",
    marginRight: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 24,
    color: "black",
    fontWeight: "semibold",
    fontFamily: "open-sans-reg",
  },
  addButtonContainer: {
    position: "absolute",
    bottom: 50,
    right: 25,
  },
});
