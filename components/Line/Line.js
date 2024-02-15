import { StyleSheet, View } from "react-native";
import React from "react";

const Line = ({ direction = "column", count = 4, style }) => {
  const isHorizontal = direction === "row";
  const lineStyle = isHorizontal ? styles.horizontalLine : styles.line;
  const lines = Array.from({ length: count }, (_, i) => (
    <View key={i} style={lineStyle} />
  ));

  return (
    <View style={[styles.linesContainer, { flexDirection: direction }, style]}>
      {lines}
    </View>
  );
};

export default Line;

const styles = StyleSheet.create({
  linesContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
    height: 3,
    marginVertical: 10,
  },
  line: {
    width: 1,
    height: "30%",
    backgroundColor: "black",
  },
  horizontalLine: {
    height: 1,
    width: 4,
    backgroundColor: "black",
  },
});
