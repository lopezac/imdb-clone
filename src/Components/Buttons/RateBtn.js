import { number, string } from "prop-types";
import { useContext, useState } from "react";
import { FaStar } from "react-icons/fa";

import { FirebaseContext } from "../../Config/firebase-context";
import { useGetSection } from "../../Utils/various";

function RateBtn({ rating = 1, movieId, mediaType }) {
  const [input, setInput] = useState(rating);
  const [showInput, setShowInput] = useState(false);
  const firebase = useContext(FirebaseContext);
  const section = useGetSection();

  function handleClick() {
    firebase.addUserInteraction(movieId, mediaType, section, input);
  }

  function toggleInput() {
    setShowInput(!showInput);
  }

  function handleChange(e) {
    setInput(e.target.value);
  }

  function rateBtnClicked() {
    toggleInput();
    handleClick("ratings", input);
  }

  return (
    <>
      <button onClick={rateBtnClicked}>
        <FaStar />
      </button>
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
  rating: number,
  movieId: number,
  mediaType: string,
};

export default RateBtn;
