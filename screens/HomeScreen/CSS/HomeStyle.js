import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efefef",
  },
  innerContainer: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  line: {
    height: 30,
    width: 3,
    backgroundColor: "blue",
    marginRight: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 24,
    color: "black",
    fontWeight: "semibold",
    fontFamily: "open-sans-reg",
  },
  addButtonContainer: {
    position: "absolute",
    bottom: 50,
    right: 25,
  },
});

export default styles;
