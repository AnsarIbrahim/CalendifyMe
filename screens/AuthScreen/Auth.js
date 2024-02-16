import React, { useState, useRef } from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { firebaseConfig } from "../../store/redux/config";
import firebase from "firebase/compat/app";

import Logo from "../../assets/Logo.png";
import ImageAsset from "../../assets/Image.png";

const Auth = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const recaptchaVerifier = useRef(null);

  const sendVerification = async () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
      .then(setVerificationId);
    setPhoneNumber("");
  };

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
      })
      .catch((error) => {
        console.log(error);
        alert("Invalid code");
      });
    Alert.alert("Phone authentication successful 👍");
  };

  return (
    <View style={styles.container}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />
      <Image source={Logo} style={styles.logo} />
      <Image source={ImageAsset} style={styles.image} />
      <View style={styles.inputContainer}>
        <Icon name="mobile" size={20} color="#000" />
        <TextInput
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="Mobile No."
          style={styles.input}
          keyboardType="phone-pad"
          autoCompleteType="tel"
        />
      </View>
      <TouchableOpacity onPress={() => sendVerification()}>
        <Icon name="send" size={20} color="#000" />
      </TouchableOpacity>
      <TextInput
        value={code}
        onChangeText={setCode}
        placeholder="Enter OTP"
        style={styles.input}
      />
      <TouchableOpacity onPress={() => confirmCode()}>
        <Icon name="check" size={20} color="#000" />
      </TouchableOpacity>
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
