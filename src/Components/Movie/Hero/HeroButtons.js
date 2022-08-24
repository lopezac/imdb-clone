import { useContext } from "react";
import { number, string } from "prop-types";

import { FirebaseContext } from "../../../Config/firebase-context";
import FavoriteBtn from "../../Buttons/FavoriteBtn";
import WatchlistBtn from "../../Buttons/WatchlistBtn";
import RateBtn from "../../Buttons/RateBtn";

function HeroButtons({ movieId, mediaType }) {
  const firebase = useContext(FirebaseContext);

  async function handleClick(section, value = true) {
    if (!firebase.auth().currentUser) return;
    const userId = firebase.auth().currentUser.uid;
    const interactions = await firebase.getUserInteractions(
      userId,
      section,
      mediaType
    );
    console.log("interacions", interactions, interactions[movieId]);
    firebase.addUserInteraction(movieId, mediaType, section, value);
  }

  return (
    <div>
      <FavoriteBtn handleClick={handleClick} />
      <WatchlistBtn handleClick={handleClick} />
      <RateBtn
        handleClick={handleClick}
        movieId={movieId}
        mediaType={mediaType}
      />
      <button>Play trailer</button>
    </div>
  );
}

HeroButtons.propTypes = {
  movieId: number,
  mediaType: string,
};

export default HeroButtons;
