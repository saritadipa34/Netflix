// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaDc7-bjtLE5gqFl8QOI5r1QUYgE8-mB4",
  authDomain: "netflix-gpt-13f85.firebaseapp.com",
  projectId: "netflix-gpt-13f85",
  storageBucket: "netflix-gpt-13f85.appspot.com",
  messagingSenderId: "305981515555",
  appId: "1:305981515555:web:f5298df5d046e0a5d30e96",
  measurementId: "G-FSGKWR7CFY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);