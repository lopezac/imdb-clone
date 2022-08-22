import { func } from "prop-types";
import { FaStar } from "react-icons/fa";

function RateBtn({ handleClick }) {
  return (
    <button onClick={() => handleClick("ratings", 9)}>
      <FaStar />
    </button>
  );
}

RateBtn.propTypes = {
  handleClick: func,
};

export default RateBtn;
