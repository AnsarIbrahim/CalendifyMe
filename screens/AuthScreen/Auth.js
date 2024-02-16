// Import necessary modules from react, react-native, @expo/vector-icons, @react-navigation/native, expo-firebase-recaptcha, and firebase
import React, { useState, useRef } from "react";
import { View, TouchableOpacity, TextInput, Text, Image } from "react-native";
import { Foundation } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import firebase from "firebase/compat/app";

// Import local assets and styles
import Logo from "../../assets/Logo.png";
import ImageAsset from "../../assets/Image.png";
import { firebaseConfig } from "../../store/redux/config";
import styles from "./CSS/AuthStyle";

/**
 * Auth is a functional component that renders a phone number authentication form.
 * @returns {JSX.Element} A View component with a form for phone number authentication.
 */
const Auth = () => {
  // Define state variables for the phone number, verification code, and verification ID
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const recaptchaVerifier = useRef(null);

  // Define a function to send a verification code to the phone number
  const sendVerification = async () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    try {
      const verificationId = await phoneProvider.verifyPhoneNumber(
        phoneNumber,
        recaptchaVerifier.current
      );
      setVerificationId(verificationId);
    } catch (error) {
      console.error(error);
    }
  };

  // Define a function to confirm the verification code and sign in the user
  const confirmCode = async () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );
    await firebase
      .auth()
      .signInWithCredential(credential)
      .then(() => {
        setCode("");
        navigation.navigate("Home");
      })
      .catch((error) => {
        console.log(error);
        alert("Invalid code");
      });
  };

  // Render a form for phone number authentication
  return (
    <View style={styles.container}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />
      <Image source={Logo} style={styles.logo} />
      <Image source={ImageAsset} style={styles.image} />
      <View style={styles.inputContainer}>
        <View style={styles.mobile}>
          <Icon name="person-outline" size={20} color="#e7c2c2" />
          <TextInput
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder="Mobile No."
            style={{ ...styles.input, fontSize: 14 }}
            keyboardType="phone-pad"
            autoCompleteType="tel"
            placeholderTextColor="#e7c2c2"
          />
          <View
            style={{
              borderLeftWidth: 1,
              borderColor: "#9a9a9a",
              height: 40,
              marginHorizontal: 10,
            }}
          />
          <TouchableOpacity onPress={() => sendVerification()}>
            <Text style={styles.otp}>Send OTP</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.otpContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 15,
          }}
        >
          <Foundation name="key" size={20} color="#e7c2c2" />
          <TextInput
            value={code}
            onChangeText={setCode}
            placeholder="Enter OTP"
            style={{ ...styles.input, fontSize: 14 }}
            placeholderTextColor="#e7c2c2"
          />
        </View>
      </View>

      <TouchableOpacity
        onPress={() => confirmCode()}
        style={{
          backgroundColor: "blue",
          width: "80%",
          padding: 15,
          alignItems: "center",
          borderRadius: 10,
          alignSelf: "center",
          marginTop: 40,
        }}
      >
        <Text style={{ color: "white" }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

// Export the Auth component as default
export default Auth;
