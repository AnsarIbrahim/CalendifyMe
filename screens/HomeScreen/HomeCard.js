import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Calender from "../../components/Calender/Calender";
import { EventContext } from "../../store/context/event-context";

const HomeCard = () => {
  const { events } = useContext(EventContext);
  const [showCalendar, setShowCalendar] = useState(false);

  if (!events.length) {
    return <Text>No events scheduled</Text>;
  }
  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return hours + "." + minutes;
  };

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

export default HomeCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 10,
  },
  dateText: {
    flexDirection: "column",
    alignItems: "center",
    gap: 2,
  },
  dayShort: {
    fontSize: 12,
    fontFamily: "open-sans-reg",
    color: "gray",
  },
  dayContainer: {
    backgroundColor: "#0000be",
    padding: 5,
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  day: {
    fontSize: 10,
    fontFamily: "open-sans-reg",
    color: "white",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  peopleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    width: "90%",
    padding: 7,
    borderRadius: 10,
    gap: 5,
  },
  peopleText: {
    fontSize: 12,
    fontFamily: "open-sans-reg",
  },
  details: {
    fontSize: 10,
    fontFamily: "open-sans-reg",
    color: "gray",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
