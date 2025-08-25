// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
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

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);


import * as admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    }),
  });
}

export const dbAdmin = admin.firestore();