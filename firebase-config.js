// firebase-config.js
// File konfigurasi pusat Firebase untuk PanenKu
// Import ini di semua file HTML yang butuh Firebase

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    sendPasswordResetEmail,
    updateProfile
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { 
    getFirestore, 
    collection, 
    doc, 
    setDoc, 
    getDoc,
    updateDoc,
    serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Konfigurasi Firebase PanenKu
const firebaseConfig = {
    apiKey: "AIzaSyAXjIpbTjIAqwfWNZQFBYNJp7M8vJJdnQc",
    authDomain: "panenku-81e5a.firebaseapp.com",
    projectId: "panenku-81e5a",
    storageBucket: "panenku-81e5a.firebasestorage.app",
    messagingSenderId: "1059537901917",
    appId: "1:1059537901917:web:bebd7f048c2778649f70b4",
    measurementId: "G-DZ0VG1QPMJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

// Export semua yang dibutuhkan
export { 
    auth, db, googleProvider,
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signInWithPopup,
    onAuthStateChanged,
    signOut,
    sendPasswordResetEmail,
    updateProfile,
    collection, doc, setDoc, getDoc, updateDoc, serverTimestamp
};