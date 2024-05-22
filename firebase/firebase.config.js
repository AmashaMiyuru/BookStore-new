// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcFZfKHmNN5g6S5-EaJzwiesyy7YkYjyQ",
  authDomain: "mern-book-inventory-26617.firebaseapp.com",
  projectId: "mern-book-inventory-26617",
  storageBucket: "mern-book-inventory-26617.appspot.com",
  messagingSenderId: "165950619348",
  appId: "1:165950619348:web:3364e5283596c8971c0541"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;