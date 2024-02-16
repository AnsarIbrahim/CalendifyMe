import { TextInput, View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { EventContext } from "../../store/context/event-context";
import TimeSelection from "../../components/Time/TimeSelection";
import DateSelection from "../../components/Date/DateSelection";
import DateHeader from "../../components/Date/DateHeader";
import Line from "../../components/Line/Line";
import Icon from "../../components/Icon/Icon";
import styles from "./CSS/EventFormStyles";

const EventForm = ({ setModalVisible, startDate: initialStartDate }) => {
  const navigation = useNavigation();
  const { addEvent } = useContext(EventContext);
  const [isAllDaySelected, setIsAllDaySelected] = useState(false);

  const [title, setTitle] = useState("");
  const [selectedDate, setSelectedDate] = useState(
    initialStartDate || new Date()
  );
  const [note, setNote] = useState("");
  const [people, setPeople] = useState("");
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  const handleClose = () => {
    setModalVisible(false);
  };

  const handleSubmit = () => {
    if (title && note && people && selectedDate) {
      setModalVisible(false);
      const eventData = {
        title,
        selectedDate: selectedDate.toISOString(),
        startTime: startTime ? startTime.toISOString() : undefined,
        endTime: endTime ? endTime.toISOString() : undefined,
        note,
        people,
      };
      addEvent(eventData);
      navigation.navigate("Event", eventData);
    } else {
      alert("Please fill all the fields");
    }
  };

  useEffect(() => {
    if ((title && note, people)) {
      setIsAllDaySelected(true);
    } else {
      setIsAllDaySelected(false);
    }
  }, [title, note, people]);

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Ionicons
          name="close"
          size={24}
          color="black"
          style={{ marginLeft: 15 }}
          onPress={() => handleClose()}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "blue",
            padding: 5,
            borderRadius: 125,
            marginRight: 10,
            width: 75,
          }}
          onPress={() => {
            handleSubmit();
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 15,
              textAlign: "center",
              fontFamily: "open-sans",
            }}
          >
            Create
          </Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={[
          styles.titleInput,
          { fontFamily: "open-sans-reg", paddingLeft: 30 },
        ]}
        placeholder="Add Title"
        placeholderTextColor="#ff00003c"
        value={title}
        onChangeText={setTitle}
      />
      <View style={styles.line} />
      <DateHeader
        isAllDaySelected={isAllDaySelected}
        handleSubmit={handleSubmit}
        text="All Day"
        Icon={() => <Ionicons name="time-outline" size={15} color="black" />}
      />
      <View style={styles.dateTimeContainer}>
        <View style={styles.dateContainer}>
          {selectedDate ? (
            <View style={styles.border}>
              <Text style={styles.dateText}>{selectedDate.toDateString()}</Text>
            </View>
          ) : (
            <DateSelection
              initialDate={selectedDate}
              onDateChange={setSelectedDate}
            />
          )}
          <Line direction="column" count={3} style={{ height: 20 }} />

          {selectedDate ? (
            <View style={styles.border}>
              <Text style={styles.dateText}>{selectedDate.toDateString()}</Text>
            </View>
          ) : (
            <DateSelection
              initialDate={selectedDate}
              onDateChange={setSelectedDate}
            />
          )}
        </View>
        <View>
          <TimeSelection
            startTime={startTime || new Date()}
            setStartTime={setStartTime}
            endTime={endTime || new Date()}
            setEndTime={setEndTime}
          />
        </View>
      </View>
      <View style={styles.line} />
      <View style={styles.noteContainer}>
        <DateHeader text="Add Note" Icon={() => <Icon />} showButton={false} />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputNote}
            value={note}
            onChangeText={setNote}
            multiline
            textAlignVertical="top"
          />
        </View>
      </View>
      <View style={[styles.noteContainer, { marginBottom: 30 }]}>
        <DateHeader
          text="Add People"
          Icon={() => (
            <MaterialCommunityIcons
              name="account-multiple-outline"
              size={20}
              color="black"
            />
          )}
          showButton={false}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={people}
            placeholder="Search people"
            onChangeText={setPeople}
          />
        </View>
      </View>

      <View style={styles.line} />
      <View style={styles.people}>
        <TouchableOpacity
          style={styles.border}
          onPress={() => {
            if (!people.includes("Ansar")) {
              setPeople((prevPeople) =>
                prevPeople ? `${prevPeople}, Ansar` : "Ansar"
              );
            }
          }}
        >
          <Text style={styles.timeText}>Ansar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.border}
          onPress={() => {
            if (!people.includes("Ibrahim")) {
              setPeople((prevPeople) =>
                prevPeople ? `${prevPeople}, Ibrahim` : "Ibrahim"
              );
            }
          }}
        >
          <Text style={styles.timeText}>Ibrahim</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EventForm;
