// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, setDoc } from 'firebase/firestore'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDTCSBudYamAuPhLbNznfXZfxvadFDKOm4",
    authDomain: "financely-3bfb4.firebaseapp.com",
    projectId: "financely-3bfb4",
    storageBucket: "financely-3bfb4.appspot.com",
    messagingSenderId: "918897402972",
    appId: "1:918897402972:web:6e59b79763a8211c5bb299",
    measurementId: "G-8VG072E8D3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export { db, auth, provider, doc, setDoc }