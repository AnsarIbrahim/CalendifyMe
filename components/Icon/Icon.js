// Import necessary modules from react and react-native
import { StyleSheet, View } from "react-native";
import React from "react";

/**
 * Icon is a functional component that renders a custom icon.
 * @returns {JSX.Element} A View component with three smaller View components inside.
 */
const Icon = () => {
  return (
    // The outer View contains three smaller View components, each representing a line in the icon
    <View style={{ flexDirection: "column", marginRight: 5 }}>
      {/* The first line is 12 units wide, 1.5 units tall, and has a semi-transparent black background */}
      <View
        style={{
          width: 12,
          height: 1.5,
          backgroundColor: "#000000bf",
          marginBottom: 4,
        }}
      />
      {/* The second line is 14 units wide, 1.5 units tall, and has a more transparent black background */}
      <View
        style={{
          width: 14,
          height: 1.5,
          backgroundColor: "#0000007f",
          marginBottom: 4,
        }}
      />
      {/* The third line is 7 units wide, 1.5 units tall, and has a semi-transparent black background */}
      <View style={{ width: 7, height: 1.5, backgroundColor: "#000000bf" }} />
    </View>
  );
};

// Export the Icon component as default
export default Icon;

// Define the styles for the Icon component
const styles = StyleSheet.create({});
