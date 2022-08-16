import { useEffect, useState } from "react";
import { useParams, Routes, Route } from "react-router-dom";

import MoviePage from "../../Components/Movie";
import {getMovieData} from "../../Config/tmdb-api";

function Movie() {
  const [data, setData] = useState(null);
  const movieId = useParams().movieId;

  useEffect(() => {
    getMovieData(movieId).then((movieData) => setData(movieData));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MoviePage data={data} />} />
      <Route path="reviews" />
      <Route path="cast" />
      <Route path="videos" />
      <Route path="images">
        <Route path="backdrops" />
        <Route path="logos" />
        <Route path="posters" />
      </Route>
    </Routes>
  );
}

export default Movie;
