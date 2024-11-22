// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSMhpNc8JEzPgXD5wnOGoo38CoLN3zG7k",
  authDomain: "inventry-management-bf0af.firebaseapp.com",
  projectId: "inventry-management-bf0af",
  storageBucket: "inventry-management-bf0af.firebasestorage.app",
  messagingSenderId: "990670536001",
  appId: "1:990670536001:web:16eb69394bfcb6fc38b5c0",
  measurementId: "G-PKKBYRTSF0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export { auth, app};
