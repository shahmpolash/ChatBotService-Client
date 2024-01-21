// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0YiVpSJUKy_kOOlOSAy58hFas-QECFrc",
  authDomain: "chatbot-ce5b5.firebaseapp.com",
  projectId: "chatbot-ce5b5",
  storageBucket: "chatbot-ce5b5.appspot.com",
  messagingSenderId: "202851771303",
  appId: "1:202851771303:web:62320d1a455e2148abcc82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;