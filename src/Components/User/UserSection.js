import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { string } from "prop-types";

import { getMoviesData } from "../../Config/tmdb-api";
import { getDate, getTitle } from "../../Utils/various";
import MovieUserCard from "./MovieUserCard";
import { FirebaseContext } from "../../Config/firebase-context";
import { capitalize } from "../../Utils/format";

function UserSection({ section }) {
  const [movies, setMovies] = useState([]);
  const [mediaType, setMediaType] = useState("movie");
  const userId = useParams().userId;
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    async function getInteractions() {
      console.log("useEfect run");
      const moviesIds = await firebase.getUserInteractions(
        userId,
        section,
        mediaType
      );
      console.log("moviesIds", moviesIds);
      return await getMoviesData(moviesIds);
    }
    getInteractions().then((result) => setMovies(result));
    console.log("movis", movies);
  }, []);

  return (
    <div>
      <h2>My {capitalize(section)}</h2>
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
              mediaType={mediaType}
              img={movie.poster_path}
              key={movie.id}
            />
          );
        })}
      </div>
    </div>
  );
}

UserSection.propTypes = {
  section: string,
};

export default UserSection;
