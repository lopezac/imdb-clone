import { Scroller } from "../../../Assets/Styles/List";
import KnownMovieCard from "../../Card/KnownMovieCard";
import { SmallestSubTitle } from "../../../Assets/Styles/Para";

function KnownFor({ movies }) {
  function sortMovies(movies) {
    return movies.sort((a, b) => (a.popularity > b.popularity ? -1 : 1));
  }

  return (
    <div>
      <SmallestSubTitle>Known For</SmallestSubTitle>
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
