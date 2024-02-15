import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

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

export default DateHeader;

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
