import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyD-Ta0h6ThSzzDB9nf3bLueQkmZWmYyP6Q',
  authDomain: 'actas-italianas-express.firebaseapp.com',
  projectId: 'actas-italianas-express',
  storageBucket: 'actas-italianas-express.appspot.com',
  messagingSenderId: '580020928198',
  appId: '1:580020928198:web:6f704af265991331e961c7',
  measurementId: 'G-242B3QK535',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const initFireBase = () => app;
