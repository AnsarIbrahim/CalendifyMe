import React, { useState, useEffect } from "react";
import { Modal, Text, View, Button, BackHandler } from "react-native";

const Event = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(true);

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
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{ backgroundColor: "white", padding: 20, borderRadius: 10 }}
          >
            <Text>This is the Event modal</Text>
            <Button title="Close" onPress={() => navigation.navigate("Home")} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Event;
