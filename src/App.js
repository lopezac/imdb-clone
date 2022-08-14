import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const firebaseConfig = {
  apiKey: "AIzaSyCLsWXIRi1PtpS-cymtLB2zf_cOyyb9sFY",
  authDomain: "imdb-9b89f.firebaseapp.com",
  projectId: "imdb-9b89f",
  storageBucket: "imdb-9b89f.appspot.com",
  messagingSenderId: "966324463405",
  appId: "1:966324463405:web:5149702761c35497e0d5a4",
};

const TMDB_API = "56247e9d0dfdfb574da47583abd13229";

initializeApp(firebaseConfig);

function App() {
  return <div></div>;
}

export default App;
