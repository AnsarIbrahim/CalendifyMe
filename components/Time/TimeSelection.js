import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const TimeSelection = ({ startTime, setStartTime, endTime, setEndTime }) => {
  const [showStart, setShowStart] = useState(false);
  const [showEnd, setShowEnd] = useState(false);
  const [mode, setMode] = useState("time");

  const showStartTimepicker = () => {
    setShowStart(true);
    setMode("time");
  };

  const showEndTimepicker = () => {
    setShowEnd(true);
    setMode("time");
  };

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

export default TimeSelection;

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
