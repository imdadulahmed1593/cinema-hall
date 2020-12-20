import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS-SBCKRTCo8M5fbGebuUdB7KBZHV6doE",
  authDomain: "cinema-hall-6db31.firebaseapp.com",
  projectId: "cinema-hall-6db31",
  storageBucket: "cinema-hall-6db31.appspot.com",
  messagingSenderId: "838958505037",
  appId: "1:838958505037:web:9c86a7fcf7d11fe9c2d004",
  measurementId: "G-HGH45TY8CV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
