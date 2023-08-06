// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6QLTbNEm3fuWdrpZnOnneFX6Ylgc66p8",
  authDomain: "interview-f8b62.firebaseapp.com",
  projectId: "interview-f8b62",
  storageBucket: "interview-f8b62.appspot.com",
  messagingSenderId: "1096142586064",
  appId: "1:1096142586064:web:818cf9266554548f889ed5",
  measurementId: "G-V4BE5LCY7B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
