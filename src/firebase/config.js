// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-Ta0h6ThSzzDB9nf3bLueQkmZWmYyP6Q",
  authDomain: "actas-italianas-express.firebaseapp.com",
  projectId: "actas-italianas-express",
  storageBucket: "actas-italianas-express.appspot.com",
  messagingSenderId: "580020928198",
  appId: "1:580020928198:web:6f704af265991331e961c7",
  measurementId: "G-242B3QK535"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const initFireBase = ()=> app