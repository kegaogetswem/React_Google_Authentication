// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDQzPN044YrM7wyl7kVbjcpGv8OI5_D0Vc",
  authDomain: "authentication-95594.firebaseapp.com",
  projectId: "authentication-95594",
  storageBucket: "authentication-95594.appspot.com",
  messagingSenderId: "671033219802",
  appId: "1:671033219802:web:ee87203546a4483f8f23e3",
  measurementId: "G-RVES7QBLY8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

//export const signInWithGoogle = () => {
// signInWithPopup(auth, provider)

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      //console.log(result);
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};
