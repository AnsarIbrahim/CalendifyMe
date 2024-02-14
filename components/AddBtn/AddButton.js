import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AddButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.addButton} onPress={onPress}>
      <Ionicons name="add" style={styles.plus} />
    </TouchableOpacity>
  );
};

export default AddButton;

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
