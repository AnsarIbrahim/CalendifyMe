import firebase from "@react-native-firebase/app";
import "@react-native-firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGlD17ar55bHLlFLTTHFA0whbxNMUD2tg",
  authDomain: "calender-657f9.firebaseapp.com",
  projectId: "calender-657f9",
  storageBucket: "calender-657f9.appspot.com",
  messagingSenderId: "144813587607",
  appId: "1:144813587607:web:0796faa34590b2a95d7dd2",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
