console.log("index.js");
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCImssnagmFCFsTY3x6ylLMvRcjw2uLUkg",
  authDomain: "cloud-firestore-p8.firebaseapp.com",
  projectId: "cloud-firestore-p8",
  storageBucket: "cloud-firestore-p8.appspot.com",
  messagingSenderId: "839478842650",
  appId: "1:839478842650:web:00751b82817f01866108a3",
  measurementId: "G-HYQSNN6DCE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);