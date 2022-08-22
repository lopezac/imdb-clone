import { func } from "prop-types";
import { FaBookmark } from "react-icons/fa";

function WatchlistBtn({ handleClick }) {
  return (
    <button onClick={() => handleClick("watchlist")}>
      <FaBookmark />
    </button>
  );
}

WatchlistBtn.propTypes = {
  handleClick: func,
};

export default WatchlistBtn;
