// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3fJmUSO52HKpaVFV2tUBTcP_HWty6Rjs",
  authDomain: "authentication-app-aec33.firebaseapp.com",
  projectId: "authentication-app-aec33",
  storageBucket: "authentication-app-aec33.appspot.com",
  messagingSenderId: "287677884159",
  appId: "1:287677884159:web:139522aeab4545508bceca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;