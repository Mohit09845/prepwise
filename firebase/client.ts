// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);