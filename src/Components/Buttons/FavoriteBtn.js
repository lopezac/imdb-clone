import { func } from "prop-types";
import { FaHeart } from "react-icons/fa";
import { useState, useEffect } from "react";

function FavoriteBtn({ handleClick }) {
  // const [activated, setActivated] = useState(false);

  // useEffect(() => {}, []);

  return (
    <button onClick={() => handleClick("favorites")}>
      <FaHeart />
    </button>
  );
}

FavoriteBtn.propTypes = {
  handleClick: func,
};

export default FavoriteBtn;
