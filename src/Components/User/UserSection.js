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
      return await firebase.getUserInteractions(userId, section, mediaType);
    }
    getMoviesIds().then((ids) => setMoviesIds(ids));
  }, [section, mediaType, userId]);

  useEffect(() => {
    if (!moviesIds) return;
    async function getInteractions() {
      return await getMoviesData(moviesIds, mediaType);
    }
    getInteractions().then((result) => {
      if (!result) return;
      setMovies(result);
    });
  }, [moviesIds]);

  function changeMediaType(pickedMedia) {
    setMediaType(pickedMedia);
  }

  if (!movies) return;
  return (
    <PadColumnFlex>
      <CenterRowDiv>
        <h2>My {capitalize(section)}</h2>
        <p onClick={() => changeMediaType("movie")}>Movies</p>
        <p onClick={() => changeMediaType("tv")}>TV</p>
      </CenterRowDiv>
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
