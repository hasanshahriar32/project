// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCT5-ulRw_ZUAumGpLN8imPsiaVx_CGKOg",
  authDomain: "paradox-new.firebaseapp.com",
  projectId: "paradox-new",
  storageBucket: "paradox-new.appspot.com",
  messagingSenderId: "518042118506",
  appId: "1:518042118506:web:f529825436517317579d13",
  measurementId: "G-JW2GTDP802",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
