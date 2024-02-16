import { StyleSheet } from "react-native";

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

export default styles;
