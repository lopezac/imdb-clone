import { useContext } from "react";
import { number, string } from "prop-types";

import { FirebaseContext } from "../../../Config/firebase-context";

function HeroButtons({ movieId, mediaType }) {
  const firebase = useContext(FirebaseContext);

  return (
    <div>
      <button 
        onClick={() => firebase.addMovieToFavorites(movieId, mediaType)}
      >
        Add to favorites
      </button>
      <button>Add to watchlist</button>
      <button>Rate</button>
      <button>Play trailer</button>
    </div>
  );
}

HeroButtons.propTypes = {
  movieId: number,
  mediaType: string,
}

export default HeroButtons;
