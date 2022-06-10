// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9V2qwaP_OtFeapKLqjPtCgjY7iyCK3K4",
  authDomain: "my-portfolio-14502.firebaseapp.com",
  projectId: "my-portfolio-14502",
  storageBucket: "my-portfolio-14502.appspot.com",
  messagingSenderId: "95649965872",
  appId: "1:95649965872:web:92d12397f9444fecdf4af5",
  measurementId: "G-WDG6L10QR9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);