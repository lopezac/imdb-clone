import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { string } from "prop-types";

import { getMoviesData } from "../../Config/tmdb-api";
import { FirebaseContext } from "../../Config/firebase-context";
import { capitalize } from "../../Utils/format";
import MoviesList from "./MoviesList";

function UserSection() {
  const firebase = useContext(FirebaseContext);
  const [movies, setMovies] = useState([]);
  const [mediaType, setMediaType] = useState("movie");
  const [moviesIds, setMoviesIds] = useState([]);
  const userId = useParams().userId;
  const section = useParams()["*"];

  useEffect(() => {
    async function getMoviesIds() {
      return await firebase.getUserInteractions(userId, section, mediaType);
    }

    getMoviesIds().then((ids) => setMoviesIds(ids));
  }, [section, mediaType]);

  useEffect(() => {
    async function getInteractions() {
      return await getMoviesData(moviesIds);
    }

    getInteractions().then((result) => setMovies(result));
  }, [moviesIds]);

  useEffect(() => {
    console.log("movies at effect", movies);
  }, [movies]);

  return (
    <div>
      <h2>My {capitalize(section)}</h2>
      <button>Movies</button>
      <button>TV</button>
      <MoviesList
        mediaType={mediaType}
        movies={movies}
        interactions={moviesIds}
      />
    </div>
  );
}

export default UserSection;
