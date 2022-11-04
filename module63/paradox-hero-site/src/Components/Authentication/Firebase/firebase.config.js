// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKApxvIABWeJhoQ7ROSjZij-BPVpxL0Dg",
  authDomain: "paradox-hero.firebaseapp.com",
  projectId: "paradox-hero",
  storageBucket: "paradox-hero.appspot.com",
  messagingSenderId: "563385276514",
  appId: "1:563385276514:web:7b1100a619b0504600d93b",
  measurementId: "G-QJS4WC1221",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
