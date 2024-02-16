// Importing necessary modules and components
import React, { useState } from "react";
import { View, Text, Modal } from "react-native";

// Import local assets and styles
import HomeCard from "./HomeCard";
import CalenderView from "../CalenderScreen/CalenderView";
import AddButton from "../../components/AddBtn/AddButton";
import EventForm from "../CalenderScreen/EventForm";
import styles from "./CSS/HomeStyle";

// Home component to display the home screen
const Home = ({ navigation }) => {
  // State for controlling the visibility of the modal
  const [modalVisible, setModalVisible] = useState(false);

  // Use layout effect to set navigation options
  React.useLayoutEffect(() => {
    navigation.setOptions({
      // your options here
    });
  }, [navigation]);

  // Render the home screen
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.line} />
        <Text style={styles.text}>Upcoming</Text>
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

// Exporting the Home component
export default Home;
