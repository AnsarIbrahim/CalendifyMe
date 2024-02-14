import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: Platform.OS === "ios" ? 25 : 0,
  },
  titleInput: {
    height: 40,
    borderWidth: 0,
    padding: 10,
    width: "100%",
  },
  line: {
    height: 1,
    width: "100%",
    backgroundColor: "#80808061",
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 10,
    paddingHorizontal: 30,
    marginTop: "1%",
  },
  inputNote: {
    height: 45,
    borderColor: "blue",
    borderWidth: 0.5,
    marginBottom: 10,
    borderRadius: 5,
    paddingVertical: 1,
    paddingHorizontal: 10,
    fontSize: 10,
    paddingTop: 5,
  },
  input: {
    height: 30,
    borderColor: "#80808068",
    borderRadius: 7,
    paddingVertical: 1,
    paddingHorizontal: 10,
    borderWidth: 1,
    padding: 6,
    fontSize: 10,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1,
      },
    }),
  },
  dateTimeHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  dateTimeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 1,
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  dateContainer: {
    flexDirection: "column",
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  allDayText: {
    fontSize: 14,
    marginHorizontal: 5,
    fontFamily: "open-sans-reg",
  },
  roundButton: {
    width: 15,
    height: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  roundButtonSelected: {
    backgroundColor: "#220080d2",
  },
  dateText: {
    fontSize: 10,
    fontFamily: "open-sans-reg",
    paddingHorizontal: 10,
  },
  timeText: {
    fontSize: 10,
    fontFamily: "open-sans-reg",
    paddingHorizontal: 10,
    fontWeight: "semibold",
  },
  linesContainer: {
    flexDirection: "column",
    alignItems: "center",
    height: 25,
    marginVertical: 5,
  },
  verticalLine: {
    height: "30%",
    width: 1,
    backgroundColor: "black",
    marginVertical: 1,
  },
  border: {
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 40,
    padding: 6,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 1,
      },
    }),
  },
  noteContainer: {
    paddingHorizontal: 15,
  },
  noteInsideContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  people: {
    flexDirection: "row",
    marginBottom: 10,
    paddingHorizontal: 30,
    marginTop: "1%",
    gap: 10,
  },
});

export default styles;
