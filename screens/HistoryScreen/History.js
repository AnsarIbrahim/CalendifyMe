// Importing necessary modules
import { Text, View } from "react-native";
import React, { useContext } from "react";

// Import local assets and styles
import { EventContext } from "../../store/context/event-context";
import styles from "./CSS/HistoryStyle";

// History component to display the list of events
const History = ({ route, navigation }) => {
  // Using context to get the events
  const { events } = useContext(EventContext);

  // If there are no events, display a message
  if (!events.length) {
    return <Text>No events scheduled</Text>;
  }

  // Function to format the date
  const formatDate = (date) => {
    const startDate = new Date(date);
    const weekdayShort = startDate.toLocaleDateString("en-US", {
      weekday: "short",
    });
    const weekdayLong = startDate.toLocaleDateString("en-US", {
      weekday: "long",
    });
    const day = startDate.toLocaleDateString("en-US", { day: "numeric" });
    const year = startDate.toLocaleDateString("en-US", { year: "numeric" });
    return { weekdayShort, weekdayLong, day, year };
  };

  // Function to format the time
  const formatTime = (time) => {
    const startTimeDate = new Date(time);
    return startTimeDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  // Render the list of events
  return (
    <>
      {events.map((event, index) => {
        const { weekdayShort, weekdayLong, day, year } = formatDate(
          event.selectedDate
        );
        const startTime = formatTime(event.startTime);
        return (
          <View key={index}>
            <View style={styles.container}>
              <View style={styles.dateText}>
                <Text style={styles.dayShort}>{weekdayShort}</Text>
                <Text style={styles.day}>{day}</Text>
              </View>
              <View style={styles.peopleContainer}>
                <Text style={styles.peopleText}>
                  {event.people} scheduled a {event.title} on {day}{" "}
                  {weekdayLong}, {year}.
                </Text>
                <Text style={styles.details}>Click for Details</Text>
              </View>
            </View>
            <View style={styles.dateContainer}>
              <Text style={styles.date}>{startTime}</Text>
            </View>
            <View style={styles.hr} />
          </View>
        );
      })}
    </>
  );
};

// Exporting the History component
export default History;
