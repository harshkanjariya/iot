// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCu6EWEkuG8b0oF9FEw1NbcpqegcN4O6Lw",
  authDomain: "iot-controller-hk.firebaseapp.com",
  databaseURL: "https://iot-controller-hk-default-rtdb.firebaseio.com",
  projectId: "iot-controller-hk",
  storageBucket: "iot-controller-hk.appspot.com",
  messagingSenderId: "629393629553",
  appId: "1:629393629553:web:63c4982f8050059f3916d0",
  measurementId: "G-WZX2FDW9K5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set };
