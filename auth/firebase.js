import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBO368RX1GwVNJuNpanvmdSD-58nPZ7Dnw",
    authDomain: "filmchase-1a5ac.firebaseapp.com",
    projectId: "filmchase-1a5ac",
    storageBucket: "filmchase-1a5ac.appspot.com",
    messagingSenderId: "648614360159",
    appId: "1:648614360159:web:822388bd6169b4700357ea",
    measurementId: "G-MCB5GNL9PZ"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {app, auth, db};