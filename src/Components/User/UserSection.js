import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { getMoviesData } from "../../Config/tmdb-api";
import { FirebaseContext } from "../../Config/firebase-context";
import { capitalize } from "../../Utils/format";
import MoviesList from "./MoviesList";
import { CenterRowDiv, PadColumnFlex } from "../../Assets/Styles/Wrapper";

function UserSection() {
  const firebase = useContext(FirebaseContext);
  const [movies, setMovies] = useState(null);
  const [mediaType, setMediaType] = useState("movie");
  const [moviesIds, setMoviesIds] = useState(null);
  const userId = useParams().userId;
  const section = useParams()["*"];

  useEffect(() => {
    async function getMoviesIds() {
      const ids = await firebase.getUserInteractions(
        userId,
        section,
        mediaType
      );
      setMoviesIds(ids);
      console.log(
        "movies length at mediaType section",
        movies,
        moviesIds,
        userId,
        section,
        mediaType,
        ids
      );
    }
    getMoviesIds();

    // getMoviesIds().then((ids) => setMoviesIds(ids));
  }, [section, mediaType]);

  useEffect(() => {
    if (!moviesIds) return;
    async function getInteractions() {
      const result = await getMoviesData(moviesIds, mediaType);
      setMovies(result);
      console.log("moviesIds", moviesIds);
      console.log("movies length at moviesids", movies, moviesIds);
    }
    getInteractions();
  }, [moviesIds]);

  useEffect(() => {
    console.log("movies at effect length", movies);
  }, [movies]);

  function changeMediaType(pickedMedia) {
    setMediaType(pickedMedia);
  }

  return (
    <PadColumnFlex>
      <CenterRowDiv>
        <h2>My {capitalize(section)}</h2>
        <p onClick={() => changeMediaType("movie")}>Movies</p>
        <p onClick={() => changeMediaType("tv")}>TV</p>
      </CenterRowDiv>
      <p>{movies && movies.length}</p>
      {movies && (
        <MoviesList
          mediaType={mediaType}
          movies={movies}
          interactions={moviesIds}
        />
      )}
    </PadColumnFlex>
  );
}

export default UserSection;
