import { func } from "prop-types";
import { FaHeart } from "react-icons/fa";
import { useState, useEffect } from "react";

import { CircleRoseBtn } from "../../Assets/Styles/Button";

function FavoriteBtn({ handleClick }) {
  // const [activated, setActivated] = useState(false);

  // useEffect(() => {}, []);

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
