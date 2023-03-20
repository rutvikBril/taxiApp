import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase

const firebaseConfig = {
  apiKey: 'AIzaSyC9JDdSXefl-6JbQSqsjF_HhRsgbkLfRr4',
  authDomain: 'newtaxiapp-33a14.firebaseapp.com',
  projectId: 'newtaxiapp-33a14',
  storageBucket: 'newtaxiapp-33a14.appspot.com',
  messagingSenderId: '496905697994',
  appId: '1:496905697994:web:15d2caffad67e3d90c5233',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
