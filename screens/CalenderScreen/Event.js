import React, { useState, useEffect } from "react";
import { Text, View, Button, BackHandler } from "react-native";
import Modal from "react-native-modal";

const Event = ({ route, navigation }) => {
  const [modalVisible, setModalVisible] = useState(true);
  const { title, startDate, time, note, people } = route.params;

  const closeOnBackPress = () => {
    if (modalVisible) {
      setModalVisible(false);
      return true;
    }
    return false;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", closeOnBackPress);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", closeOnBackPress);
    };
  }, [modalVisible]);

  return (
    <View>
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        swipeDirection="down"
        onSwipeComplete={() => setModalVisible(false)}
        style={{ justifyContent: "flex-end", margin: 0 }}
      >
        <View
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 10,
            height: "100%",
          }}
        >
          <Text>Title: {title}</Text>
          <Text>Day: {day}</Text>
          <Text>Time: {time}</Text>
          <Text>Note: {note}</Text>
          <Text>People: {people}</Text>
          <Button title="Close" onPress={() => navigation.navigate("Home")} />
        </View>
      </Modal>
    </View>
  );
};

export default Event;
