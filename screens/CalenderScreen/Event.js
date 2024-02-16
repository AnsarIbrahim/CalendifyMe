// Import necessary modules
import React, { useState, useEffect } from "react";
import { Text, View, BackHandler, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

// Import local assets and styles
import DateHeader from "../../components/Date/DateHeader";
import Icon from "../../components/Icon/Icon";
import Line from "../../components/Line/Line";
import styles from "./CSS/EventFormStyles";

/**
 * Event is a functional component that renders an event details modal.
 * @param {Object} props - The props object.
 * @param {Object} props.route - The route object.
 * @param {Object} props.navigation - The navigation object.
 * @returns {JSX.Element} A View component with a Modal inside.
 */
const Event = ({ route, navigation }) => {
  // Define state variables for the visibility of the modal
  const [modalVisible, setModalVisible] = useState(true);
  // Destructure the event details from the route params
  const { title, selectedDate, startTime, endTime, note, people } =
    route.params;

  // Format the selected date, start time, and end time, and split the people string into an array
  const startDate = selectedDate
    ? new Date(selectedDate).toLocaleDateString("en-US", {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "Date not provided";
  const startTimeDate = new Date(startTime);
  const endTimeDate = new Date(endTime);
  const peopleArray = people ? people.split(",") : [];

  // Define a function to close the modal when the back button is pressed
  const closeOnBackPress = () => {
    if (modalVisible) {
      setModalVisible(false);
      return true;
    }
    return false;
  };

  // Add an event listener for the back button press
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", closeOnBackPress);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", closeOnBackPress);
    };
  }, [modalVisible]);

  // Render a modal with the event details
  return (
    <View>
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => navigation.navigate("Home")}
        swipeDirection="down"
        onSwipeComplete={() => navigation.navigate("Home")}
        style={{ justifyContent: "flex-end", margin: 0 }}
      >
        <View
          style={{
            backgroundColor: "white",
            padding: 20,
            paddingTop: 40,
            borderRadius: 10,
            height: "100%",
          }}
        >
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => navigation.navigate("Home")}
          >
            <Ionicons
              name="chevron-down-outline"
              size={24}
              color="gray"
              style={{ transform: [{ scaleX: 2 }] }}
            />
          </TouchableOpacity>
          <Text>{title}</Text>
          <View style={styles.line} />
          <DateHeader
            isAllDaySelected={true}
            handleSubmit={true}
            text="All Day"
            Icon={() => (
              <Ionicons name="time-outline" size={15} color="black" />
            )}
          />
          <View style={styles.dateTimeContainer}>
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>{startDate}</Text>
              <Line direction="column" count={3} style={{ height: 20 }} />
              <Text style={styles.dateText}>{startDate}</Text>
            </View>

            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>
                {startTimeDate.toLocaleTimeString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
              </Text>
              <Line direction="column" count={0} style={{ height: 20 }} />
              <Text style={styles.dateText}>
                {endTimeDate.toLocaleTimeString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
              </Text>
            </View>
          </View>

          <View style={styles.line} />
          <DateHeader
            text={note ? note : "No Note"}
            Icon={() => <Icon />}
            showButton={false}
          />
          <DateHeader
            text="People"
            Icon={() => (
              <MaterialCommunityIcons
                name="account-multiple-outline"
                size={20}
                color="black"
              />
            )}
            showButton={false}
          />
          <View style={styles.people}>
            {peopleArray.map((person, index) => (
              <View key={index} style={styles.border}>
                <Text style={styles.timeText}>{person}</Text>
              </View>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
};

// Export the CalendarView component as default
export default Event;
