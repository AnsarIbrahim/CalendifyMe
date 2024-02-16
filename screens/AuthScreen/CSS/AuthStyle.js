import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 100,
    height: 50,
    backgroundColor: "#fff",
  },
  image: {
    width: 200,
    height: 200,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#edecec",
    borderRadius: 15,
  },
  mobile: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "50%",
    padding: 10,
    margin: 10,
    borderWidth: 0,
    borderColor: "#000",
  },
  otp: {
    color: "#7a7a7a",
    padding: 10,
    fontSize: 12,
  },
  otpContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#edecec",
    borderRadius: 15,
    marginTop: 20,
    width: "85%",
  },
  Btn: {
    marginTop: 20,
  },
});

export default styles;
