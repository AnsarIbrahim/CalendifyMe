import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyCiihbNXUP5Z12j4irYi4lcYcc1jDFbdLs",
  authDomain: "otpauth-6d4d6.firebaseapp.com",
  projectId: "otpauth-6d4d6",
  storageBucket: "otpauth-6d4d6.appspot.com",
  messagingSenderId: "659595087704",
  appId: "1:659595087704:web:027903f7475d5a12a81f2d",
  measurementId: "G-G5Y49C17GK",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
