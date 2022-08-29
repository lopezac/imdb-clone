import { array, string } from "prop-types";

import { getDate, getTitle } from "../../Utils/various";
import MovieUserCard from "./MovieUserCard";
import { ListRowGap } from "../../Assets/Styles/List";

function MoviesList({ movies, mediaType, interactions }) {
  return (
    <ListRowGap>
      {movies.map((movie) => {
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
    </ListRowGap>
  );
}

MoviesList.propTypes = {
  movies: array,
  mediaType: string,
};

export default MoviesList;
