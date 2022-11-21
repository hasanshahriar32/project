// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjn_jSaBuuvFxE6OpZ-elNyJc_TgRbYww",
  authDomain: "simple-firebase-auth-32.firebaseapp.com",
  projectId: "simple-firebase-auth-32",
  storageBucket: "simple-firebase-auth-32.appspot.com",
  messagingSenderId: "967398305494",
  appId: "1:967398305494:web:96f3a67cf5e85bd2456377",
  measurementId: "G-0V8Z0XREQF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;