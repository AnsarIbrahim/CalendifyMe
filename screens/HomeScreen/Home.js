import React, { useState } from "react";
import { View, Text, StyleSheet, Modal } from "react-native";

import HomeCard from "./HomeCard";
import CalenderView from "../CalenderScreen/CalenderView";
import AddButton from "../../components/AddBtn/AddButton";
import EventForm from "../CalenderScreen/EventForm";

const Home = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      // your options here
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.line} />
        <Text style={styles.text}>Upcomming</Text>
      </View>
      <HomeCard />
      <CalenderView />
      <View style={styles.addButtonContainer}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <EventForm setModalVisible={setModalVisible} />
        </Modal>
        <AddButton onPress={() => setModalVisible(true)} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efefef",
  },
  innerContainer: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  line: {
    height: 30,
    width: 3,
    backgroundColor: "blue",
    marginRight: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 24,
    color: "black",
    fontWeight: "semibold",
    fontFamily: "open-sans-reg",
  },
  addButtonContainer: {
    position: "absolute",
    bottom: 50,
    right: 25,
  },
});
