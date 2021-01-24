// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCvFSzW0NJmQ5D9qebpttOaofSiDK14qbU",
  authDomain: "fit-trackoo.firebaseapp.com",
  databaseURL: "https://fit-trackoo-default-rtdb.firebaseio.com",
  projectId: "fit-trackoo",
  storageBucket: "fit-trackoo.appspot.com",
  messagingSenderId: "133171910580",
  appId: "1:133171910580:web:3c58a9e3669afefc3a44e1",
  measurementId: "G-5X930YMS26",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
