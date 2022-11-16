// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARBOdmwGCdoi7juJwvl5mQySa6jEcodG0",
  authDomain: "programming-hero-mongodb.firebaseapp.com",
  projectId: "programming-hero-mongodb",
  storageBucket: "programming-hero-mongodb.appspot.com",
  messagingSenderId: "277026172972",
  appId: "1:277026172972:web:d4bc6687827c745b626189",
  measurementId: "G-BZB3HV5D6D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
