import { string, number } from "prop-types";

import { StyledLink } from "../../Assets/Styles/Link";
import { getImg } from "../../Utils/various";

function ActorCard({ name, character, img, id }) {
  return (
    <li>
      <StyledLink to={`/person/${id}`}>
        <img src={getImg(img)} width="138" alt={name} />
        <p>{name}</p>
        <p>{character}</p>
      </StyledLink>
    </li>
  );
}

ActorCard.propTypes = {
  name: string,
  character: string,
  img: string,
  id: number,
};

export default ActorCard;
