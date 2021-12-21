// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCGuy3erBWOnRdk1h8_F75voJf7L6BQlE8",
    authDomain: "fb-clone-948de.firebaseapp.com",
    projectId: "fb-clone-948de",
    storageBucket: "fb-clone-948de.appspot.com",
    messagingSenderId: "902237413112",
    appId: "1:902237413112:web:490b8e109101f5d3cf250d",
    measurementId: "G-Y2F3Y90JGN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider}; 
  export default db;