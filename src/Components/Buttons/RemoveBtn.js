import { number, string } from "prop-types";
import { useContext } from "react";
import { useParams } from "react-router-dom";

import { FirebaseContext } from "../../Config/firebase-context";

function RemoveBtn({ movieId, mediaType }) {
  const section = useParams()["*"];
  const firebase = useContext(FirebaseContext);

  async function handleClick() {
    await firebase.removeUserInteraction(movieId, section, mediaType);
  }

  return <button onClick={handleClick}>Remove</button>;
}

RemoveBtn.propTypes = {
  movieId: number,
  mediaType: string,
};

export default RemoveBtn;
