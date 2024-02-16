// Import necessary modules from react, react-native and @expo/vector-icons
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

/**
 * DateHeader is a functional component that renders a header with an icon, text, and an optional button.
 * @param {Object} props - The props object.
 * @param {boolean} props.isAllDaySelected - The selection state of the button.
 * @param {Function} props.handleSubmit - The function to call when the button is pressed.
 * @param {string} props.text - The text to display next to the icon.
 * @param {JSX.Element} props.Icon - The icon to display.
 * @param {boolean} props.showButton - Whether to show the button.
 * @returns {JSX.Element} A View component with an icon, text, and an optional button.
 */
const DateHeader = ({
  isAllDaySelected,
  handleSubmit,
  text,
  Icon,
  showButton = true,
}) => {
  return (
    <View style={styles.dateTimeHeader}>
      <View style={styles.timeContainer}>
        <Icon />
        <Text style={styles.allDayText}>{text}</Text>
      </View>
      <View>
        {showButton && (
          <TouchableOpacity
            style={[
              styles.roundButton,
              isAllDaySelected && styles.roundButtonSelected,
            ]}
            onPress={() => {
              if (isAllDaySelected) {
                handleSubmit();
              }
            }}
          >
            {isAllDaySelected && (
              <Ionicons name="checkmark" size={10} color="white" />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

// Export the DateHeader component as default
export default DateHeader;

// Define the styles for the dateTimeHeader, timeContainer, roundButton, and roundButtonSelected
const styles = StyleSheet.create({
  dateTimeHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  roundButton: {
    width: 15,
    height: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  roundButtonSelected: {
    backgroundColor: "#220080d2",
  },
});
