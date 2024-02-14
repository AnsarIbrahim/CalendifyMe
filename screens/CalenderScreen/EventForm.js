import { TextInput, View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import DateTimePicker from "@react-native-community/datetimepicker";

import { EventContext } from "../../store/context/event-context";
import styles from "./CSS/EventFormStyles";

const EventForm = ({ setModalVisible, startDate, endDate }) => {
  const navigation = useNavigation();
  const { addEvent } = useContext(EventContext);
  const [isAllDaySelected, setIsAllDaySelected] = useState(false);

  const [title, setTitle] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState(new Date());
  const [note, setNote] = useState("");
  const [people, setPeople] = useState("");

  const [showStart, setShowStart] = useState(false);
  const [showEnd, setShowEnd] = useState(false);
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [mode, setMode] = useState("time");

  const showStartTimepicker = () => {
    setShowStart(true);
    setMode("time");
  };

  const showEndTimepicker = () => {
    setShowEnd(true);
    setMode("time");
  };

  const onChangeStart = (event, selectedDate) => {
    const currentTime = selectedDate || startTime;
    setShowStart(false);
    setStartTime(currentTime);
  };

  const onChangeEnd = (event, selectedDate) => {
    const currentTime = selectedDate || endTime;
    setShowEnd(false);
    setEndTime(currentTime);
  };

  const submitHandler = () => {
    addEvent({ title, day, time, note, people });
    setTitle("");
    setDay("");
    setTime("");
    setNote("");
    setPeople("");
  };

  const handleClose = () => {
    setModalVisible(false);
  };

  const handleSubmit = () => {
    setModalVisible(false);
    submitHandler();
    navigation.navigate("Event", { title, day, time, note, people });
  };

  useEffect(() => {
    if (title && day && time && note && people) {
      setIsAllDaySelected(true);
    } else {
      setIsAllDaySelected(false);
    }
  }, [title, day, time, note, people]);

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
      <View style={styles.dateTimeHeader}>
        <View style={styles.timeContainer}>
          <Ionicons name="time-outline" size={15} color="black" />
          <Text style={styles.allDayText}>All Day</Text>
        </View>
        <View>
          <TouchableOpacity
            style={[
              styles.roundButton,
              isAllDaySelected && styles.roundButtonSelected,
            ]}
            onPress={() => {
              if (isAllDaySelected) {
                handleSubmit();
              }
            }}
          >
            {isAllDaySelected && (
              <Ionicons name="checkmark" size={10} color="white" />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.dateTimeContainer}>
        <View style={styles.dateContainer}>
          <View style={styles.border}>
            <Text style={styles.dateText}>{startDate.toDateString()}</Text>
          </View>
          <View style={styles.linesContainer}>
            <View style={styles.verticalLine} />
            <View style={styles.verticalLine} />
            <View style={styles.verticalLine} />
          </View>
          <View style={styles.border}>
            <Text style={styles.dateText}>{endDate.toDateString()}</Text>
          </View>
        </View>
        <View>
          <View style={styles.border}>
            <TouchableOpacity onPress={showStartTimepicker}>
              <Text style={styles.timeText}>
                {startTime.toLocaleTimeString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
              </Text>
            </TouchableOpacity>
          </View>
          {showStart && (
            <DateTimePicker
              testID="dateTimePicker"
              value={startTime}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChangeStart}
            />
          )}
          <View style={styles.linesContainer} />
          <View style={styles.border}>
            <TouchableOpacity onPress={showEndTimepicker}>
              <Text style={styles.timeText}>
                {endTime.toLocaleTimeString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
              </Text>
            </TouchableOpacity>
          </View>
          {showEnd && (
            <DateTimePicker
              testID="dateTimePicker"
              value={endTime}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChangeEnd}
            />
          )}
        </View>
      </View>
      <View style={styles.line} />
      <View style={styles.noteContainer}>
        <View style={styles.noteInsideContainer}>
          <View style={{ flexDirection: "column", marginRight: 5 }}>
            <View
              style={{
                width: 12,
                height: 1.5,
                backgroundColor: "#000000bf",
                marginBottom: 4,
              }}
            />
            <View
              style={{
                width: 14,
                height: 1.5,
                backgroundColor: "#0000007f",
                marginBottom: 4,
              }}
            />
            <View
              style={{ width: 7, height: 1.5, backgroundColor: "#000000bf" }}
            />
          </View>
          <Text style={{ color: "black", fontFamily: "open-sans-reg" }}>
            Add Note
          </Text>
        </View>
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
        <View style={styles.noteInsideContainer}>
          <MaterialCommunityIcons
            name="account-multiple-outline"
            size={20}
            color="black"
            style={{ marginRight: 5 }}
          />
          <Text style={{ color: "black", fontFamily: "open-sans-reg" }}>
            Add People
          </Text>
        </View>
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
