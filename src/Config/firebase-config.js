import { initializeApp } from "firebase/app";
import {
  doc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
  collection,
  query,
  orderBy,
  deleteDoc,
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

  function db() {
    return getFirestore();
  }

  function auth() {
    return getAuth();
  }

  async function signIn() {
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

  function isUserSignedIn() {
    return !!auth().currentUser;
  }

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
    const docRef = doc(db(), "users", id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  }

  async function getUserInteractions(userId, section, mediaType) {
    const subColRef = collection(db(), `users/${userId}/${mediaType}`);
    const q = query(subColRef, orderBy(section));
    let data = {};

    // try querySnap.docs instead of forEach
    const querySnap = await getDocs(q);
    querySnap.forEach((doc) => {
      data[doc.id] = doc.data();
    });
    return data;
  }

  async function addUserInteraction(movieId, mediaType, section, value) {
    const movieRef = doc(
      db(),
      `users/${getUserId()}/${mediaType}`,
      movieId.toString()
    );
    setDoc(movieRef, { [section]: value }, { merge: true });
  }

  async function removeUserInteraction(movieId, section, mediaType) {
    const movieRef = doc(
      db(),
      `users/${getUserId()}/${mediaType}`,
      movieId.toString()
    );
    await deleteDoc(movieRef);
  }

  function getUserId() {
    if (auth().currentUser) return auth().currentUser.uid;
  }

  async function getRating(movieId, mediaType, section) {
    const ratings = getUserInteractions(getUserId(), section, mediaType);
    return ratings[movieId];
  }

  return {
    db,
    auth,
    signIn,
    signOutUser,
    getProfileImgUrl,
    getUserName,
    isUserSignedIn,
    isUserInDb,
    addUserToDb,
    getUserData,
    handleSignIn,
    getUserInteractions,
    addUserInteraction,
    removeUserInteraction,
    getRating,
    getUserId,
  };
}
