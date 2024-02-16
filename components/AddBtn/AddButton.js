// Import necessary modules from react, react-native and @expo/vector-icons
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

/**
 * AddButton is a functional component that renders a button with a "+" icon.
 * @param {Object} props - The props object.
 * @param {Function} props.onPress - The function to call when the button is pressed.
 * @returns {JSX.Element} A TouchableOpacity component with an Ionicon inside.
 */
const AddButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.addButton} onPress={onPress}>
      <Ionicons name="add" style={styles.plus} />
    </TouchableOpacity>
  );
};

// Export the AddButton component as default
export default AddButton;

// Define the styles for the AddButton and the Ionicon
const styles = StyleSheet.create({
  addButton: {
    backgroundColor: "blue",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  plus: {
    color: "white",
    fontSize: 35,
  },
});
