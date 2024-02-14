import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { Calendar } from "react-native-calendars";
import EventForm from "./EventForm";

const CalendarView = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [calendarShown, setCalendarShown] = useState(false);
  const [dateForPicker, setDateForPicker] = useState("start");

  const onDateChange = (date) => {
    setCalendarShown(false);
    if (dateForPicker === "start") {
      setStartDate(new Date(date));
    } else {
      setEndDate(new Date(date));
    }
  };

  const showDatePicker = (forDate) => {
    setDateForPicker(forDate);
    setCalendarShown(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.filterText}>Filter</Text>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <EventForm
              setModalVisible={setModalVisible}
              startDate={startDate}
              endDate={endDate}
            />
          </Modal>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={styles.applyText}>Apply</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.hr} />
        <View style={styles.dateRow}>
          <Text>Start Date</Text>
          <Text>End Date</Text>
        </View>
        <View style={styles.dateSelect}>
          <View style={styles.border}>
            <TouchableOpacity onPress={() => showDatePicker("start")}>
              <Text style={styles.dateText}>{startDate.toDateString()}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.border}>
            <TouchableOpacity onPress={() => showDatePicker("end")}>
              <Text style={styles.dateText}>{endDate.toDateString()}</Text>
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
                <Calendar onDayPress={(day) => onDateChange(day.dateString)} />
              </View>
            </TouchableOpacity>
          </Modal>
        </View>
      </View>
    </View>
  );
};

export default CalendarView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    alignItems: "center",
  },
  filterText: {
    fontSize: 15,
    fontWeight: "semibold",
    fontFamily: "open-sans",
  },
  applyText: {
    color: "blue",
    fontFamily: "open-sans",
    fontSize: 15,
  },
  hr: {
    borderBottomColor: "#808080aa",
    borderBottomWidth: 1,
    width: "100%",
  },
  dateRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
    fontFamily: "open-sans",
  },
  dateSelect: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
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
  dateText: {
    fontSize: 10,
    fontFamily: "open-sans-reg",
    paddingHorizontal: 10,
  },
});
