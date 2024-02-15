import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";

import { EventContext } from "../../store/context/event-context";

const History = ({ route, navigation }) => {
  const { events } = useContext(EventContext);

  if (!events.length) {
    return <Text>No events scheduled</Text>;
  }

  return (
    <>
      {events.map((event, index) => {
        const startDate = new Date(event.selectedDate);
        const weekdayShort = startDate.toLocaleDateString("en-US", {
          weekday: "short",
        });
        const weekdayLong = startDate.toLocaleDateString("en-US", {
          weekday: "long",
        });
        const day = startDate.toLocaleDateString("en-US", { day: "numeric" });
        const year = startDate.toLocaleDateString("en-US", { year: "numeric" });
        const startTimeDate = new Date(event.startTime);
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
              <Text style={styles.date}>
                {startTimeDate.toLocaleTimeString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
              </Text>
            </View>
            <View style={styles.hr} />
          </View>
        );
      })}
    </>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 10,
    backgroundColor: "white",
  },
  dateText: {
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
  },
  dayShort: {
    fontSize: 14,
    fontFamily: "open-sans-reg",
    color: "gray",
  },
  peopleContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 5,
  },
  peopleText: {
    fontSize: 10,
    fontFamily: "open-sans-reg",
  },
  details: {
    fontSize: 10,
    fontFamily: "open-sans-reg",
    color: "black",
  },
  hr: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "100%",
  },
  dateContainer: {
    alignItems: "flex-end",
    paddingRight: 15,
    backgroundColor: "white",
  },
  date: {
    fontSize: 10,
    fontFamily: "open-sans-reg",
    color: "gray",
    paddingBottom: 5,
  },
});
