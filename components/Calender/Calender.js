import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import React from "react";
import { Calendar } from "react-native-calendars";

const Calender = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <TouchableOpacity
        style={styles.centeredView}
        activeOpacity={1}
        onPressOut={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Calendar
            hideExtraDays
            hideDayNames
            markedDates={{
              "2022-12-16": {
                selected: true,
                marked: true,
                selectedColor: "#0000a9",
              },
            }}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default Calender;

const styles = StyleSheet.create({
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
});
