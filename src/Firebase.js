import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "contact-c31b8.firebaseapp.com",
  projectId: "contact-c31b8",
  storageBucket: "contact-c31b8.appspot.com",
  messagingSenderId: "953516207232",
  appId: "1:953516207232:web:cfe5b735d1e8ff9b870a65",
  measurementId: "G-W1CCGHT3ZT"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);