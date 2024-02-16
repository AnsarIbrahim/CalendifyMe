import React, { createContext, useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/auth";

export const FirebaseContext = createContext();

export const FirebaseContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState("");

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  // Handle the button press
  const signInWithPhoneNumber = async (phoneNumber) => {
    try {
      const confirmation = await firebase
        .auth()
        .signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (error) {
      console.error("Error in signInWithPhoneNumber:", error);
    }
  };

  const confirmCode = async () => {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log("Invalid code.");
    }
  };

  return (
    <FirebaseContext.Provider
      value={{
        currentUser,
        firebase,
        signInWithPhoneNumber,
        confirmCode,
        code,
        setCode,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
