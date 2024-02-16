// Import necessary modules from react, react-native and @react-native-community/datetimepicker
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

/**
 * TimeSelection is a functional component that renders a time picker.
 * @param {Object} props - The props object.
 * @param {Date} props.startTime - The initial start time to display.
 * @param {Function} props.setStartTime - The function to call when the start time changes.
 * @param {Date} props.endTime - The initial end time to display.
 * @param {Function} props.setEndTime - The function to call when the end time changes.
 * @returns {JSX.Element} A fragment with two TouchableOpacity components and two DateTimePicker components.
 */
const TimeSelection = ({ startTime, setStartTime, endTime, setEndTime }) => {
  // Define state variables for the visibility of the start and end time pickers, and the mode of the DateTimePicker
  const [showStart, setShowStart] = useState(false);
  const [showEnd, setShowEnd] = useState(false);
  const [mode, setMode] = useState("time");

  // Define functions to show the start and end time pickers
  const showStartTimepicker = () => {
    setShowStart(true);
    setMode("time");
  };
  const showEndTimepicker = () => {
    setShowEnd(true);
    setMode("time");
  };

  // Define functions to handle changes to the start and end times
  const onChangeStart = (event, selectedDate) => {
    const currentTime = selectedDate || startTime;
    setShowStart(false);
    setStartTime(currentTime);
  };
  const onChangeEnd = (event, selectedDate) => {
    const currentTime = selectedDate || endTime;
    setShowEnd(false);
    setEndTime(currentTime);
  };

  // Render two TouchableOpacity components that show the time pickers when pressed, and two DateTimePicker components
  return (
    <>
      <View style={styles.border}>
        <TouchableOpacity onPress={showStartTimepicker}>
          <Text style={styles.timeText}>
            {startTime.toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </Text>
        </TouchableOpacity>
      </View>
      {showStart && (
        <DateTimePicker
          testID="dateTimePicker"
          value={startTime}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChangeStart}
        />
      )}
      <View style={styles.linesContainer} />
      <View style={styles.border}>
        <TouchableOpacity onPress={showEndTimepicker}>
          <Text style={styles.timeText}>
            {endTime.toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </Text>
        </TouchableOpacity>
      </View>
      {showEnd && (
        <DateTimePicker
          testID="dateTimePicker"
          value={endTime}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChangeEnd}
        />
      )}
    </>
  );
};

// Export the TimeSelection component as default
export default TimeSelection;

// Define the styles for the border, timeText, and linesContainer
const styles = StyleSheet.create({
  border: {
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 40,
    padding: 6,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 1,
      },
    }),
  },
  timeText: {
    fontSize: 10,
    fontFamily: "open-sans-reg",
    paddingHorizontal: 10,
    fontWeight: "semibold",
  },
  linesContainer: {
    flexDirection: "column",
    alignItems: "center",
    height: 25,
    marginVertical: 5,
  },
});
