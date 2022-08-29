import { func } from "prop-types";
import { FaHeart } from "react-icons/fa";

import { CircleRoseBtn } from "../../Assets/Styles/Button";

function FavoriteBtn({ handleClick }) {
  return (
    <CircleRoseBtn onClick={() => handleClick("favorites")}>
      <FaHeart />
    </CircleRoseBtn>
  );
}

FavoriteBtn.propTypes = {
  handleClick: func,
};

export default FavoriteBtn;
