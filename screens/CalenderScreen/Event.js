import React, { useState, useEffect } from "react";
import { Text, View, BackHandler, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import DateHeader from "../../components/Date/DateHeader";
import Icon from "../../components/Icon/Icon";
import Line from "../../components/Line/Line";
import styles from "./CSS/EventFormStyles";

const Event = ({ route, navigation }) => {
  const [modalVisible, setModalVisible] = useState(true);
  const { title, selectedDate, startTime, endTime, note, people } =
    route.params;

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

export default Event;
