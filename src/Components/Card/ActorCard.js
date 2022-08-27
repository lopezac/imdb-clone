import { string, number } from "prop-types";

import { PersonCard } from "../../Assets/Styles/Card";
import { MovieImg } from "../../Assets/Styles/Image";
import { StyledLink } from "../../Assets/Styles/Link";
import { getImg } from "../../Utils/various";

function ActorCard({ name, character, img, id }) {
  return (
    <PersonCard>
      <StyledLink to={`/person/${id}`}>
        <MovieImg src={getImg(img)} width="138" alt={name} />
        <p>{name}</p>
        <p>{character}</p>
      </StyledLink>
    </PersonCard>
  );
}

ActorCard.propTypes = {
  name: string,
  character: string,
  img: string,
  id: number,
};

export default ActorCard;
