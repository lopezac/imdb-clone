import { Scroller } from "../../../Assets/Styles/Scroller";
import { getImg } from "../../../Utils/various";

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
              <li key={movie.id}>
                <img
                  src={getImg(movie.poster_path)}
                  alt={movie.title}
                  width="100"
                />
                <p>{movie.title}</p>
              </li>
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
