import { useContext } from "react";
import { number, string } from "prop-types";
import { VscTriangleRight } from "react-icons/vsc";
import { MdSettings } from "react-icons/md";

import { FirebaseContext } from "../../../Config/firebase-context";
import FavoriteBtn from "../../Buttons/FavoriteBtn";
import WatchlistBtn from "../../Buttons/WatchlistBtn";
import RateBtn from "../../Buttons/RateBtn";
import { ButtonsDiv } from "../MovieDivs";
import { CircleBlueBtn, TransparentWhiteBtn } from "../../../Assets/Styles/Button";

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
    <ButtonsDiv>
      <CircleBlueBtn>
        <MdSettings />
      </CircleBlueBtn>
      <FavoriteBtn handleClick={handleClick} />
      <WatchlistBtn handleClick={handleClick} />
      <RateBtn
        handleClick={handleClick}
        movieId={movieId}
        mediaType={mediaType}
      />
      <TransparentWhiteBtn>
        <VscTriangleRight /> Play trailer
      </TransparentWhiteBtn>
    </ButtonsDiv>
  );
}

HeroButtons.propTypes = {
  movieId: number,
  mediaType: string,
};

export default HeroButtons;
