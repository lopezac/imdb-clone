import { number, string } from "prop-types";
import { useContext, useState } from "react";
import { FaStar } from "react-icons/fa";

import { CircleYellowBtn } from "../../Assets/Styles/Button";
import { FirebaseContext } from "../../Config/firebase-context";

function RateBtn({ rating = 1, movieId, mediaType }) {
  const [input, setInput] = useState(rating);
  const [showInput, setShowInput] = useState(false);
  const firebase = useContext(FirebaseContext);

  function handleClick() {
    firebase.addUserInteraction(movieId, mediaType, "ratings", input);
  }

  function toggleInput() {
    setShowInput(!showInput);
  }

  function handleChange(e) {
    setInput(e.target.value);
  }

  function rateBtnClicked() {
    if (!firebase.auth().currentUser) return;
    toggleInput();
    handleClick("ratings", input);
  }

  return (
    <>
      <CircleYellowBtn onClick={rateBtnClicked}>
        <FaStar />
      </CircleYellowBtn>
      {showInput && (
        <input
          type="number"
          value={input}
          onChange={handleChange}
          min="1"
          max="10"
        />
      )}
    </>
  );
}

RateBtn.propTypes = {
  rating: string,
  movieId: number,
  mediaType: string,
};

export default RateBtn;
