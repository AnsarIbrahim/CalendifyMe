// Importing necessary modules and components
import { Text, View, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// Import local assets and styles
import Calender from "../../components/Calender/Calender";
import { EventContext } from "../../store/context/event-context";
import styles from "./CSS/HomeCardStyle";

// HomeCard component to display the list of events
const HomeCard = () => {
  // Using context to get the events
  const { events } = useContext(EventContext);
  // State for controlling the visibility of the calendar
  const [showCalendar, setShowCalendar] = useState(false);

  // If there are no events, display a message
  if (!events.length) {
    return <Text>No events scheduled</Text>;
  }

  // Function to format the time
  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return hours + "." + minutes;
  };

  // Render the list of events
  return (
    <>
      {events.map((event, index) => {
        const startDate = new Date(event.selectedDate);
        const weekdayShort = startDate.toLocaleDateString("en-US", {
          weekday: "short",
        });
        const day = startDate.toLocaleDateString("en-US", { day: "numeric" });
        const startTimeDate = new Date(event.startTime);
        const endTimeDate = new Date(event.endTime);
        return (
          <View key={index}>
            <View style={styles.container}>
              <View style={styles.dateText}>
                <Text style={styles.dayShort}>{weekdayShort}</Text>
                <TouchableOpacity
                  style={styles.day}
                  onPress={() => setShowCalendar(true)}
                >
                  <View style={styles.dayContainer}>
                    <Text style={styles.day}>{day}</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.peopleContainer}>
                <View>
                  <Text style={styles.peopleText}>{event.title}</Text>
                  <Text style={styles.details}>
                    {formatTime(startTimeDate)}
                    {" - "}
                    {endTimeDate.toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    })}
                  </Text>
                </View>
                <View style={styles.iconContainer}>
                  <MaterialCommunityIcons
                    name="account-outline"
                    size={20}
                    color="lightblue"
                  />
                  <Text style={{ color: "lightblue" }}>
                    {event.people.split(",").length}
                  </Text>
                </View>
              </View>
            </View>
            {showCalendar && (
              <Calender
                modalVisible={showCalendar}
                setModalVisible={setShowCalendar}
              />
            )}
          </View>
        );
      })}
    </>
  );
};

// Exporting the HomeCard component
export default HomeCard;
