// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_ppigy086_-nNqIu5KAaxZiuDXw-LNKs",
  authDomain: "vegan-bunker-scl018-83764.firebaseapp.com",
  projectId: "vegan-bunker-scl018-83764",
  storageBucket: "vegan-bunker-scl018-83764.appspot.com",
  messagingSenderId: "115371875450",
  appId: "1:115371875450:web:973f71adfc119dba72efc3",
  measurementId: "G-BGR7N211G7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();

export default db;