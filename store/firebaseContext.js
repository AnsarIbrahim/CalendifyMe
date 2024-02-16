// FirebaseContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";

const FirebaseContext = createContext();

export const useFirebaseAuth = () => {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw new Error("useFirebaseAuth must be used within a FirebaseProvider");
  }
  return context;
};

export const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      setUser(authUser);
      setIsInitializing(false);
    });

    return () => unsubscribe();
  }, []);

  const signInWithPhoneNumber = async (phoneNumber) => {
    try {
      const confirmation = await firebase
        .auth()
        .signInWithPhoneNumber(phoneNumber);
      return confirmation;
    } catch (error) {
      console.error("Error signing in with phone number:", error);
      throw error;
    }
  };

  const confirmCode = async (confirmation, code) => {
    try {
      await confirmation.confirm(code);
    } catch (error) {
      console.error("Error confirming code:", error);
      throw error;
    }
  };

  const value = {
    user,
    isInitializing,
    signInWithPhoneNumber,
    confirmCode,
  };

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
};
