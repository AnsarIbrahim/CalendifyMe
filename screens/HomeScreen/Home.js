import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Home({ navigation }) {
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
    </View>
  );
}

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
});
