import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, signInWithPopup, GoogleAuthProvider, signOut} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLsWXIRi1PtpS-cymtLB2zf_cOyyb9sFY",
  authDomain: "imdb-9b89f.firebaseapp.com",
  projectId: "imdb-9b89f",
  storageBucket: "imdb-9b89f.appspot.com",
  messagingSenderId: "966324463405",
  appId: "1:966324463405:web:5149702761c35497e0d5a4",
};

export function Firebase() {
  initializeApp(firebaseConfig);
  console.log("firebase run");

  function db() {
    return getFirestore();
  }

  function auth() {
    return getAuth();
  }

  async function signIn() {
    console.log("sign in run")
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth(), provider);
  }

  function signOutUser() {
    signOut(auth()); 
  }

  function getProfileImgUrl() {
    return auth().currentUser.photoUrl || "../Assets/Images/no-user.png"
  }

  function getUserName() {
    return auth().currentUser.displayName;
  }

  return { db, auth, signIn, signOutUser, getProfileImgUrl, getUserName };
}

