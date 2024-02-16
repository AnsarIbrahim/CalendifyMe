// Import necessary modules from react and react-native
import { StyleSheet, View } from "react-native";
import React from "react";

/**
 * Line is a functional component that renders a set of lines in a specified direction.
 * @param {Object} props - The props object.
 * @param {string} props.direction - The direction in which to render the lines ("column" or "row").
 * @param {number} props.count - The number of lines to render.
 * @param {Object} props.style - Additional styles to apply to the lines container.
 * @returns {JSX.Element} A View component with a set of lines inside.
 */
const Line = ({ direction = "column", count = 4, style }) => {
  // Determine whether the lines should be horizontal based on the direction prop
  const isHorizontal = direction === "row";
  // Choose the appropriate style for the lines based on their orientation
  const lineStyle = isHorizontal ? styles.horizontalLine : styles.line;
  // Create an array of lines
  const lines = Array.from({ length: count }, (_, i) => (
    <View key={i} style={lineStyle} />
  ));

  // Render a container View with the lines inside
  return (
    <View style={[styles.linesContainer, { flexDirection: direction }, style]}>
      {lines}
    </View>
  );
};

// Export the Line component as default
export default Line;

// Define the styles for the linesContainer, line, and horizontalLine
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
