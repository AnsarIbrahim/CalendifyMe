import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    alignItems: "center",
  },
  filterText: {
    fontSize: 15,
    fontWeight: "semibold",
    fontFamily: "open-sans",
  },
  applyText: {
    color: "blue",
    fontFamily: "open-sans",
    fontSize: 15,
  },
  hr: {
    borderBottomColor: "#808080aa",
    borderBottomWidth: 1,
    width: "100%",
  },
  dateRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
    fontFamily: "open-sans",
  },
  dateSelect: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 20,
  },
});

export default styles;
