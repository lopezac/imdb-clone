import { func } from "prop-types";
import { FaBookmark } from "react-icons/fa";

import { CircleBlueBtn } from "../../Assets/Styles/Button";

function WatchlistBtn({ handleClick }) {
  return (
    <CircleBlueBtn onClick={() => handleClick("watchlist")}>
      <FaBookmark />
    </CircleBlueBtn>
  );
}

WatchlistBtn.propTypes = {
  handleClick: func,
};

export default WatchlistBtn;
