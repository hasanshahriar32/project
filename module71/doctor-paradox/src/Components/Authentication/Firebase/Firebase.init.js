// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAq2WtuLNRtnU6J_4NHXHeRMzHjaJF75nY",
  authDomain: "paradox-doc.firebaseapp.com",
  projectId: "paradox-doc",
  storageBucket: "paradox-doc.appspot.com",
  messagingSenderId: "974147762631",
  appId: "1:974147762631:web:2ea80860e18c44061741e2",
  measurementId: "G-281JVH583R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
