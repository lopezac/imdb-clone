import { useEffect, useState } from "react";
import { useParams, Routes, Route } from "react-router-dom";

import MoviePage from "../../Components/Movie";

function Movie() {
  const [data, setData] = useState(null);
  const movieId = useParams().movieId;
  const TMDB_API = process.env.REACT_APP_TMDB_API_KEY;

  useEffect(() => {
    getMovieData(movieId).then((movieData) => setData(movieData));
  }, []);

  async function getMovieData(id) {
    // (/watch/providers), critique external page, (/external_ids), collection
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API}&append_to_response=images,videos,credits,keywords,recommendations`
    );
    const result = await response.json();
    return result;
  }

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
