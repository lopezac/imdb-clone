import { array, string } from "prop-types";

import { getDate, getTitle } from "../../Utils/various";
import MovieUserCard from "./MovieUserCard";

function MoviesList({ movies, mediaType, interactions }) {
  console.log("movies at list", movies, interactions);
  return (
    <div>
      {movies.map((movie) => {
        console.log("userdata at list", interactions[movie.id]);
        return (
          <MovieUserCard
            id={movie.id}
            date={getDate(movie)}
            title={getTitle(movie)}
            overview={movie.overview}
            img={movie.poster_path}
            mediaType={mediaType}
            key={movie.id}
            userData={interactions[movie.id]}
          />
        );
      })}
    </div>
  );
}

MoviesList.propTypes = {
  movies: array,
  mediaType: string,
};

export default MoviesList;
