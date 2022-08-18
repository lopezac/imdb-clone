import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/index";
import Movie from "./Pages/Movie";
import Person from "./Pages/Person";
import Tv from "./Pages/Tv";
import ScrollToTop from "./Utils/ScrollToTop";

function RouteSwitch() {
  return (
    <BrowserRouter basename="/">
      <ScrollToTop />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />

          <Route path="movie">
            <Route path=":movieId/*" element={<Movie />} />
          </Route>

          <Route path="tv">
            <Route path=":tvId/*" element={<Tv />}>
              <Route path="reviews" />
              <Route path="seasons" />
              <Route path="season/:seasonNum">
                <Route path="episode/:episodeNum" />
              </Route>
            </Route>
          </Route>

          <Route path="person">
            <Route path=":personId/*" element={<Person />} />
          </Route>

          <Route path="user/:userId">
            <Route path="watchlist" />
            <Route path="favoritelist" />
            <Route path="ratings" />
            <Route path="reviews" />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
