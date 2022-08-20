import { array } from "prop-types";

import { Scroller } from "../../Assets/Styles/Scroller";
import { getDate, getTitle } from "../../Utils/various";
import MovieHomeCard from "../Card/MovieHomeCard";

function Trending({ movies }) {
  if (!movies) return;
  return (
    <div>
      <h2>Trending</h2>
      <button>Today</button>
      <button>This Week</button>
      <Scroller>
        {movies.map((movie) => {
          return (
            <MovieHomeCard
              img={movie.poster_path}
              title={getTitle(movie)}
              date={getDate(movie)}
              section={movie.media_type}
              id={movie.id}
              key={movie.id}
            />
          );
        })}
      </Scroller>
    </div>
  );
}

Trending.propTypes = {
  movies: array,
};

export default Trending;
