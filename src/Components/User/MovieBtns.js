import { string, number, array } from "prop-types";

import FavoriteBtn from "../Buttons/FavoriteBtn";
import RateBtn from "../Buttons/RateBtn";
import RemoveBtn from "../Buttons/RemoveBtn";
import WatchlistBtn from "../Buttons/WatchlistBtn";
import { SmallGapDiv } from "../../Assets/Styles/Wrapper";

function MovieBtns({ ratings, mediaType, id }) {
  return (
    <SmallGapDiv>
      <FavoriteBtn />
      <WatchlistBtn />
      <RateBtn rating={ratings} mediaType={mediaType} movieId={id} />
      <RemoveBtn movieId={id} mediaType={mediaType} />
    </SmallGapDiv>
  );
}

MovieBtns.propTypes = {
  id: number,
  mediaType: string,
  ratings: array,
};

export default MovieBtns;
