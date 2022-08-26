import { useEffect, useState } from "react";

import Hero from "../../Components/Home/Hero";
import { HomeDiv } from "../../Components/Home/Home";
import Popular from "../../Components/Home/Popular";
import Trending from "../../Components/Home/Trending";
import { getPopular, getTrending } from "../../Config/tmdb-api";

function Home() {
  const [popularMovies, setPopularMovies] = useState(null);
  const [popularTv, setPopularTv] = useState(null);
  const [trending, setTrending] = useState(null);

  useEffect(() => {
    getPopular("movie").then((result) => setPopularMovies(result.results));
    getPopular("tv").then((result) => setPopularTv(result.results));
    getTrending("day").then((result) => setTrending(result.results));
  }, []);

  return (
    <HomeDiv>
      <Hero />
      <Popular section="movie" title="Movies" movies={popularMovies} />
      <Popular section="tv" title="TV Shows" movies={popularTv} />
      <Trending movies={trending} />
    </HomeDiv>
  );
}

export default Home;
