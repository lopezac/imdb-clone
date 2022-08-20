import { string, array } from "prop-types";

import { Scroller } from "../../Assets/Styles/Scroller";
import { getDate, getTitle } from "../../Utils/various";
import MovieHomeCard from "../Card/MovieHomeCard";

function Popular({ section, title, movies }) {
  if (!movies) return;
  return (
    <div>
      <h2>Popular {title}</h2>
      <Scroller>
        {movies.map((movie) => {
          return (
            <MovieHomeCard
              img={movie.poster_path}
              title={getTitle(movie)}
              date={getDate(movie)}
              section={section}
              id={movie.id}
              key={movie.id}
            />
          );
        })}
      </Scroller>
    </div>
  );
}

Popular.propTypes = {
  section: string,
  title: string,
  movies: array,
};

export default Popular;
