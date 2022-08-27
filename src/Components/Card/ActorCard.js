import { string, number } from "prop-types";

import { PersonCard } from "../../Assets/Styles/Card";
import { PersonImg } from "../../Assets/Styles/Image";
import { StyledLink } from "../../Assets/Styles/Link";
import { SmallBlack, SmallPara } from "../../Assets/Styles/Para";
import { getImg } from "../../Utils/various";

function ActorCard({ name, character, img, id }) {
  return (
    <PersonCard>
      <StyledLink to={`/person/${id}`}>
        <PersonImg src={getImg(img)} width="138" alt={name} />
        <SmallBlack>{name}</SmallBlack>
        <SmallPara>{character}</SmallPara>
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
