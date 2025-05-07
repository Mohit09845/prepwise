import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEZdAIjUF8T58jsYjVweCvRmczpW7b1bA",
  authDomain: "prepwise-d139d.firebaseapp.com",
  projectId: "prepwise-d139d",
  storageBucket: "prepwise-d139d.firebasestorage.app",
  messagingSenderId: "524207801357",
  appId: "1:524207801357:web:95942c3a1cc5134da30144",
  measurementId: "G-SZCEPVM670"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);