import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Modal,
  StyleSheet,
  Platform,
} from "react-native";
import { Calendar } from "react-native-calendars";

const DateSelection = ({ initialDate, onDateChange }) => {
  const [calendarShown, setCalendarShown] = useState(false);
  const [date, setDate] = useState(initialDate);

  const showDatePicker = () => {
    setCalendarShown(true);
  };

  const handleDateChange = (selectedDate) => {
    const [year, month, day] = selectedDate.split("-");
    const currentDate = new Date(year, month - 1, day);
    setCalendarShown(false);
    setDate(currentDate);
    onDateChange(currentDate);
  };

  return (
    <>
      <View style={styles.border}>
        <TouchableOpacity onPress={showDatePicker}>
          <Text style={styles.dateText}>{date.toDateString()}</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={calendarShown}
        onRequestClose={() => setCalendarShown(false)}
      >
        <TouchableOpacity
          style={styles.centeredView}
          activeOpacity={1}
          onPressOut={() => setCalendarShown(false)}
        >
          <View style={styles.modalView}>
            <Calendar onDayPress={(day) => handleDateChange(day.dateString)} />
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default DateSelection;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  border: {
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
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
  dateText: {
    fontSize: 10,
    fontFamily: "open-sans-reg",
    paddingHorizontal: 20,
    textAlign: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
