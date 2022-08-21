import { array } from "prop-types";
import { useState, useEffect } from "react";

import { getMovieData } from "../../Config/tmdb-api";
import { getDate, getTitle } from "../../Utils/various";
import MovieUserCard from "./MovieUserCard";

function Favorites({ moviesIds }) {
  const [movies, setMovies] = useState([]);
  const [section, setSection] = useState("movie");

  useEffect(() => {
    let tempMovies = [];
    moviesIds.map(async (id) => {
      const movie = await getMovieData(id);
      if (movie.media_type === section) tempMovies.push(movie);
    });
    setMovies(tempMovies);
  }, []);

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

Favorites.propTypes = {
  moviesIds: array,
};

export default Favorites;
