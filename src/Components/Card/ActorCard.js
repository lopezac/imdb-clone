import { string } from "prop-types";

import { getImg } from "../../Utils/various";

function ActorCard({ name, character, img }) {
  return (
    <li>
      <img src={getImg(img)} width="138" alt={name} />
      <p>{name}</p>
      <p>{character}</p>
    </li>
  );
}

ActorCard.propTypes = {
  name: string,
  character: string,
  img: string,
};

export default ActorCard;
