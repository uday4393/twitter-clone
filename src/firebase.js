import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAx8r4HcWTHCgXuYK3y4bVr3gcJ4k7alk0",
  authDomain: "twitter-clone-e0468.firebaseapp.com",
  databaseURL: "https://twitter-clone-e0468.firebaseio.com",
  projectId: "twitter-clone-e0468",
  storageBucket: "twitter-clone-e0468.appspot.com",
  messagingSenderId: "352063089619",
  appId: "1:352063089619:web:8768704e12499e48615d26",
  measurementId: "G-H7DLLBJLCD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
