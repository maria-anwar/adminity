// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB-ew79o0YFbhYGEOQeNB_ZssQy_OdONfI",
    authDomain: "adminty-48b7e.firebaseapp.com",
    projectId: "adminty-48b7e",
    storageBucket: "adminty-48b7e.appspot.com",
    messagingSenderId: "516759787652",
    appId: "1:516759787652:web:f8d3e5d01954d618398ad1",
    measurementId: "G-XZ01M4PSNJ",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, collection, addDoc, getDocs };
