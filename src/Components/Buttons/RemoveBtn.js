import { number, string } from "prop-types";
import { useContext } from "react";

import { FirebaseContext } from "../../Config/firebase-context";
import { useGetSection } from "../../Utils/various";

function RemoveBtn({ movieId, mediaType }) {
  const section = useGetSection();
  const firebase = useContext(FirebaseContext);

  async function handleClick() {
    if (!firebase.auth().currentUser) return;
    await firebase.removeUserInteraction(movieId, section, mediaType);
  }

  return <button onClick={handleClick}>Remove</button>;
}

RemoveBtn.propTypes = {
  movieId: number,
  mediaType: string,
};

export default RemoveBtn;
