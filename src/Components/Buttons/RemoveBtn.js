import { number, string } from "prop-types";
import { useContext } from "react";
import { ImCross } from "react-icons/im";

import { FirebaseContext } from "../../Config/firebase-context";
import { useGetSection } from "../../Utils/various";
import { CircleBlueBtn } from "../../Assets/Styles/Button";

function RemoveBtn({ movieId, mediaType }) {
  const section = useGetSection();
  const firebase = useContext(FirebaseContext);

  async function handleClick() {
    if (!firebase.auth().currentUser) return;
    await firebase.removeUserInteraction(movieId, section, mediaType);
  }

  return (
    <CircleBlueBtn onClick={handleClick}>
      <ImCross />
    </CircleBlueBtn>
  );
}

RemoveBtn.propTypes = {
  movieId: number,
  mediaType: string,
};

export default RemoveBtn;
