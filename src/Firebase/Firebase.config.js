// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo_4aMe3gloXPRK8LtHGfO9o62PPVk8rA",
  authDomain: "service-authenticatin.firebaseapp.com",
  projectId: "service-authenticatin",
  storageBucket: "service-authenticatin.appspot.com",
  messagingSenderId: "110803332753",
  appId: "1:110803332753:web:c0754f3400d1052f3e5930"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;