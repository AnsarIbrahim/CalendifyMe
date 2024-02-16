import { StyleSheet } from "react-native";

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

export default styles;
