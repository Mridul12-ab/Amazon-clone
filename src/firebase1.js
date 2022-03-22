import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDa12xANXL2HdlhHtf-dFPePVMNJ-VThdE",
    authDomain: "clone-e97b4.firebaseapp.com",
    projectId: "clone-e97b4",
    storageBucket: "clone-e97b4.appspot.com",
    messagingSenderId: "235032206924",
    appId: "1:235032206924:web:bd5ea3f772f0396d445ee9",
    measurementId: "G-JGJLSMS55B"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db,auth };