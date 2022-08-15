// import { initializeApp } from "firebase/app";
// import { useEffect, useState } from "react";
// import { firebaseConfig } from "./Config/firebase-config";
// const TMDB_API = "";
// initializeApp(firebaseConfig);
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/index";
import Movie from "./Pages/Movie";

function RouteSwitch() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />

          <Route path="movie">
            <Route path=":movieId" element={<Movie />}>
              <Route path="reviews" />
              <Route path="cast" />
            </Route>
          </Route>

          <Route path="tv">
            <Route path=":tvId">
              <Route path="reviews" />
              <Route path="seasons" />
              <Route path="season/:seasonNum">
                <Route path="episode/:episodeNum" />
              </Route>
            </Route>
          </Route>

          <Route path="person">
            <Route path=":personNum" />
          </Route>

          <Route path="user/:userNum">
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
