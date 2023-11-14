// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPXGbTHZ_WwKgtL2XmAN14OgOXQSccyQ0",
  authDomain: "fir-6f68e.firebaseapp.com",
  projectId: "fir-6f68e",
  storageBucket: "fir-6f68e.appspot.com",
  messagingSenderId: "956284489522",
  appId: "1:956284489522:web:52c814564c16019fb2512b",
  measurementId: "G-3RJ848RFFY"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
export default firebaseConfig;