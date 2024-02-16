import { StyleSheet } from "react-native";

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

export default styles;
