import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCSE6kvJLZxuFtlKH6E3BUqYA3UDBut_mI",
  authDomain: "movie-auth-71488.firebaseapp.com",
  projectId: "movie-auth-71488",
  storageBucket: "movie-auth-71488.appspot.com",
  messagingSenderId: "818185896917",
  appId: "1:818185896917:web:2269d92022a2541689b35c",
  measurementId: "G-N852B1NMYC"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app,auth};