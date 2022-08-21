import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { getMoviesData } from "../../Config/tmdb-api";
import { getDate, getTitle } from "../../Utils/various";
import MovieUserCard from "./MovieUserCard";
import { FirebaseContext } from "../../Config/firebase-context";

function Favorites() {
  const [movies, setMovies] = useState([]);
  const [section, setSection] = useState("movie");
  const userId = useParams().userId;
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    firebase.getUserFavorites(userId, section).then((moviesIds) => {
      console.log("moviesIds", moviesIds);
      setMovies(getMoviesData(moviesIds));
    });
  }, []);

  useEffect(() => {
    console.log("favorite movies", movies);
  }, [movies])

  return (
    <div>
      <h2>My Favorites</h2>
      <button>Movies</button>
      <button>TV</button>
      <div>
        {movies.map((movie) => {
          return (
            <MovieUserCard
              id={movie.id}
              date={getDate(movie)}
              title={getTitle(movie)}
              overview={movie.overview}
              section={section}
              img={movie.poster_path}
              key={movie.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Favorites;
