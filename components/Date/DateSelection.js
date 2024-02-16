// Import necessary modules from react, react-native and react-native-calendars
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

/**
 * DateSelection is a functional component that renders a date picker.
 * @param {Object} props - The props object.
 * @param {Date} props.initialDate - The initial date to display.
 * @param {Function} props.onDateChange - The function to call when the date changes.
 * @returns {JSX.Element} A View component with a TouchableOpacity and a Modal.
 */
const DateSelection = ({ initialDate, onDateChange }) => {
  // Define state variables for the visibility of the calendar and the selected date
  const [calendarShown, setCalendarShown] = useState(false);
  const [date, setDate] = useState(initialDate);

  // Define a function to show the date picker
  const showDatePicker = () => {
    setCalendarShown(true);
  };

  // Define a function to handle date changes
  const handleDateChange = (selectedDate) => {
    const [year, month, day] = selectedDate.split("-");
    const currentDate = new Date(year, month - 1, day);
    setCalendarShown(false);
    setDate(currentDate);
    onDateChange(currentDate);
  };

  // Render a TouchableOpacity that shows the date picker when pressed, and a Modal that contains the calendar
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

// Export the DateSelection component as default
export default DateSelection;

// Define the styles for the centeredView, border, dateText, and modalView
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
