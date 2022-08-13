import {initializeApp} from "firebase/app";
import {useEffect, useState} from "react";

const firebaseConfig = {
  apiKey: "AIzaSyCLsWXIRi1PtpS-cymtLB2zf_cOyyb9sFY",
  authDomain: "imdb-9b89f.firebaseapp.com",
  projectId: "imdb-9b89f",
  storageBucket: "imdb-9b89f.appspot.com",
  messagingSenderId: "966324463405",
  appId: "1:966324463405:web:5149702761c35497e0d5a4"
};

const TMDB_API = "56247e9d0dfdfb574da47583abd13229";

initializeApp(firebaseConfig);

function App() {
  const [movies, setMovies] = useState(null);
  const [text, setText] = useState("");
  // const [config, setConfig] = useState("");

  useEffect(() => {
  }, []);

  const handleInput  = (e) => {
    setText(e.target.value);
  }

  function handleSubmit() {
    getData();
  }

  async function getData() {
    const moviesData = await getMovies(text);
    console.log(moviesData, text)
    setMovies(moviesData);
    // const config = await fetch(`https://api.themoviedb.org/3/configuration?api_key=${TMDB_API}`);
  }

  async function getMovies(name) {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API}&language=en-US&query=${name}&page=1`);
    const result = await response.json();
    return result.results;
  }

  async function getMovie(id) {
    const response = await fetch(` https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API}`);
    const result = await response.json();
    console.log(result);
  }


  function getImg(imgPath) {
    return `https://image.tmdb.org/t/p/w500/${imgPath}`;
  }

  return <div>
    <input onChange={handleInput} type="text"/>
    <button onClick={handleSubmit}>Search</button>
    {movies && movies.map(movie => {
    getMovie(movie.id);
    return (
      <div key={movie.id} >
        <p>{movie.title}</p>
        <img src={getImg(movie.backdrop_path)} />
        <p>{movie.overview}</p>
        <p>releasedate {movie.release_date}</p>
      </div>
    );
  })}</div>;
}

export default App;
