import { Scroller } from "../../../Assets/Styles/Scroller";
import KnownMovieCard from "../../Card/KnownMovieCard";

function KnownFor({ movies }) {
  function sortMovies(movies) {
    return movies.sort((a, b) => (a.popularity > b.popularity ? -1 : 1));
  }

  return (
    <div>
      <h2>Known For</h2>
      <Scroller>
        {sortMovies(movies)
          .slice(0, 8)
          .map((movie) => {
            return (
              <KnownMovieCard
                key={movie.id}
                id={movie.id}
                img={movie.poster_path}
                title={movie.title}
              />
            );
          })}
      </Scroller>
    </div>
  );
}

KnownFor.propTypes = {
  // movies:
};

export default KnownFor;
