import { useEffect, useState } from "react";
import { useParams, Routes, Route } from "react-router-dom";

import TvPage from "../../Components/Tv/index";
import { getTvData } from "../../Config/tmdb-api";

function Tv() {
  const [data, setData] = useState(null);
  const tvId = useParams().tvId;

  useEffect(() => {
    getTvData(tvId).then((tvData) => setData(tvData));
  }, [tvId]);

  return (
    <Routes>
      <Route path="/" element={<TvPage data={data} />} />
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

export default Tv;
