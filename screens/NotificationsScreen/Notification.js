import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";

import { EventContext } from "../../store/context/event-context";

const Notification = () => {
  const { events } = useContext(EventContext);

  if (!events.length) {
    return <Text>No events scheduled</Text>;
  }

  return (
    <>
      {events.map((event, index) => {
        const startDate = new Date(event.selectedDate);
        const startTime = new Date(event.startTime);
        const weekdayLong = startDate.toLocaleDateString("en-US", {
          weekday: "long",
        });
        const day = startDate.toLocaleDateString("en-US", { day: "numeric" });
        const year = startDate.toLocaleDateString("en-US", { year: "numeric" });
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

export default Notification;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  miniContainer: {
    flexDirection: "row",
    gap: 10,
  },
  roundedView: {
    backgroundColor: "lightpink",
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  whiteText: {
    color: "white",
    fontSize: 30,
  },
  peopleText: {
    fontSize: 12,
    fontFamily: "open-sans-reg",
    fontWeight: "bold",
  },
  dateText: {
    fontSize: 10,
    fontFamily: "open-sans-reg",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  declineButton: {
    backgroundColor: "red",
    padding: 6,
    borderRadius: 20,
    flex: 1,
    marginRight: 5,
    marginTop: 8,
  },
  acceptButton: {
    backgroundColor: "blue",
    padding: 6,
    borderRadius: 20,
    flex: 1,
    marginRight: 5,
    marginTop: 8,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 8,
    fontWeight: "bold",
  },
  timeText: {
    fontSize: 10,
    fontFamily: "open-sans-reg",
    color: "gray",
    textAlign: "right",
  },
  hr: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "100%",
  },
});
