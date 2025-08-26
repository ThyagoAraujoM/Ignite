// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv7PkbwAVKbckdpUDFZocCA32ChwaupNU",
  authDomain: "ignews-3ac50.firebaseapp.com",
  databaseURL: "https://ignews-3ac50-default-rtdb.firebaseio.com",
  projectId: "ignews-3ac50",
  storageBucket: "ignews-3ac50.firebasestorage.app",
  messagingSenderId: "495633895795",
  appId: "1:495633895795:web:030a6f3e10e53b2d923506",
  measurementId: "G-BDWPLMCP8E"
};

// Initialize Firebase FRONTEND
const firebaseApp = initializeApp(firebaseConfig);
export const dbClient = getFirestore(firebaseApp);