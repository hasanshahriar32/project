// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD54tO7OWtfkpJbY3awrCWXiJ9MuCd7WkA",
  authDomain: "paradox-services.firebaseapp.com",
  projectId: "paradox-services",
  storageBucket: "paradox-services.appspot.com",
  messagingSenderId: "946497913573",
  appId: "1:946497913573:web:01fdc06296c6ad4d770a0c",
  measurementId: "G-L85438RGTG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
