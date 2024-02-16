// Import necessary modules
import { Text, View, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";

// Import local assets and styles
import EventForm from "./EventForm";
import DateSelection from "../../components/Date/DateSelection";
import Line from "../../components/Line/Line";
import styles from "./CSS/CalenderViewStyles";

/**
 * CalendarView is a functional component that renders a calendar view with a filter.
 * @returns {JSX.Element} A View component with a filter and a date selection form.
 */
const CalendarView = () => {
  // Define state variables for the visibility of the modal and the start date
  const [modalVisible, setModalVisible] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  // Render a container View with a card View inside
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
          <DateSelection initialDate={startDate} onDateChange={setStartDate} />
          <Line direction="row" count={5} />
          <DateSelection initialDate={startDate} onDateChange={setStartDate} />
        </View>
      </View>
    </View>
  );
};

// Export the CalendarView component as default
export default CalendarView;
