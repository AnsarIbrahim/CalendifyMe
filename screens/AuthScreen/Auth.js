import React, { useState } from "react";
import { View, Button, TextInput, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // replace with the actual path to your Icon component

import Logo from "../../assets/Logo.png";
import ImageAsset from "../../assets/Image.png";

const Auth = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");

  function signInWithPhoneNumber(phoneNumber) {
    // Logic to sign in with phone number
  }

  function confirmCode() {
    try {
      // Logic to confirm code
    } catch (error) {
      console.log("Invalid code.");
    }
  }

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Image source={ImageAsset} style={styles.image} />
      <View style={styles.inputContainer}>
        <Icon name="mobile" size={20} color="#000" />
        <TextInput
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="Mobile No."
          style={styles.input}
        />
      </View>
      <Button
        title="Send OTP"
        onPress={() => signInWithPhoneNumber(phoneNumber)}
      />
      <TextInput
        value={code}
        onChangeText={setCode}
        placeholder="Enter OTP"
        style={styles.input}
      />
      <Button title="Login" onPress={() => confirmCode()} />
    </View>
  );
};

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
  },
  input: {
    width: "80%",
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: "#000",
  },
});

export default Auth;
