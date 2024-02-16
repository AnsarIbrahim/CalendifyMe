// Importing necessary modules and components
import { TouchableOpacity, Text, View } from "react-native";
import React, { useContext } from "react";

// Import local assets and styles
import { EventContext } from "../../store/context/event-context";
import styles from "./CSS/NotificationStyles";

// Notification component to display the list of notifications
const Notification = () => {
  // Using context to get the events
  const { events } = useContext(EventContext);

  // If there are no events, display a message
  if (!events.length) {
    return <Text>No events scheduled</Text>;
  }

  // Render the list of notifications
  return (
    <>
      {events.map((event, index) => {
        // Convert selectedDate and startTime to Date objects
        const startDate = new Date(event.selectedDate);
        const startTime = new Date(event.startTime);
        // Format the date
        const weekdayLong = startDate.toLocaleDateString("en-US", {
          weekday: "long",
        });
        const day = startDate.toLocaleDateString("en-US", { day: "numeric" });
        const year = startDate.toLocaleDateString("en-US", { year: "numeric" });
        // Render each notification
        return (
          <View key={index}>
            <View style={styles.container}>
              <View style={styles.miniContainer}>
                <View style={styles.roundedView}>
                  <Text style={styles.whiteText}>
                    {event.people
                      .split(",")
                      .map((person) => person.trim()[0])
                      .join(", ")}
                  </Text>
                </View>
                <View>
                  <Text style={styles.peopleText}>
                    {event.people} scheduled a meeting
                  </Text>
                  <Text style={styles.dateText}>
                    {day}th {weekdayLong}, {year}
                  </Text>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.declineButton}>
                      <Text style={styles.buttonText}>Decline</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.acceptButton}>
                      <Text style={styles.buttonText}>Accept</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View>
                <Text style={styles.timeText}>
                  {startTime.toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
                </Text>
              </View>
            </View>
            <View style={styles.hr} />
          </View>
        );
      })}
    </>
  );
};

// Exporting the Notification component
export default Notification;
