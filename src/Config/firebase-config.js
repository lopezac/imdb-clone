import { initializeApp } from "firebase/app";
import { 
  doc,
  getDoc, 
  getDocs, 
  getFirestore,
  setDoc,
  collection,
  query,
  where,
} from "firebase/firestore";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

import noImage from "../Assets/Images/no-user.jpg";

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
    console.log("sign in run");
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth(), provider);
    } catch (error) {
      console.log("error at sign in", error);
    }
  }

  function signOutUser() {
    signOut(auth());
  }

  function getProfileImgUrl() {
    return auth().currentUser.photoURL || noImage;
  }

  function getUserName() {
    return auth().currentUser.displayName;
  }

  // function isUserSignedIn() {
  //   return !!auth().currentUser;
  // }

  async function isUserInDb() {
    const docRef = doc(db(), "users", auth().currentUser.uid);
    const docSnap = await getDoc(docRef);
    return !!docSnap.exists();
  }

  async function addUserToDb() {
    const user = auth().currentUser;
    await setDoc(doc(db(), "users", user.uid), {
      name: user.displayName,
      createdAt: user.metadata.creationTime,
      photoURL: user.photoURL,
    });
  }

  async function handleSignIn() {
    await signIn();
    if (await !isUserInDb()) await addUserToDb();
  }

  async function getUserData(id) {
    console.log("id at getUserData", id);
    const docRef = doc(db(), "users", id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  }

  async function getUserFavorites(userId, section) {
    const subColRef = collection(db(), `users/${userId}/favorites`);
    const q = query(subColRef, where("mediaType", "==", section))
    const querySnap = await getDocs(q);
    let data = [];
    // try querySnap.docs instead of forEach
    console.log("querySnap", querySnap);
    querySnap.forEach((doc) => {
      data.push({[doc.id]: doc.data()});
      console.log(doc.id, "=>", doc.data());
    });
    return data;
  }

  async function addMovieToFavorites(movieId, mediaType) {
    console.log("movieId, mediatype", movieId, mediaType);
    const userId = auth().currentUser.uid;
    const movieRef = doc(db(), `users/${userId}/favorites`, movieId.toString());
    await setDoc(movieRef, { "mediaType": mediaType });
  }

  return {
    db,
    auth,
    signIn,
    signOutUser,
    getProfileImgUrl,
    getUserName,
    // isUserSignedIn,
    isUserInDb,
    addUserToDb,
    getUserData,
    handleSignIn,
    getUserFavorites,
    addMovieToFavorites
  };
}
