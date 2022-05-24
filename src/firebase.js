import { initializeApp } from 'firebase/app';
import "firebase/database";
import "firebase/firestore";
import { getFirestore } from 'firebase/firestore';

var fireData = {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyBQ1Xf-5JEqdH4yJbrmzgh3kLZue6Vt3qw",
    authDomain: "fivethdt-react-app.firebaseapp.com",
    projectId: "fivethdt-react-app",
    storageBucket: "fivethdt-react-app.appspot.com",
    messagingSenderId: "288481227062",
    appId: "1:288481227062:web:68cdc7056cf96a48d0c397",
    measurementId: "G-3T5NMW1FVF",
};
var app = initializeApp(fireData);
var db = getFirestore(app);

export { db };
