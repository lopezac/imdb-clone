import { string } from "prop-types";

import { SmallRectangleCard } from "../../Assets/Styles/Card";
import { SmallRectangleImg } from "../../Assets/Styles/Image";
import { StyledLink } from "../../Assets/Styles/Link";
import { getImg } from "../../Utils/various";

function RecommendCard({ img, name, id }) {
  return (
    <SmallRectangleCard>
      <StyledLink to={`/movie/${id}`}>
        <SmallRectangleImg src={getImg(img)} alt={name} width="250" />
        <p>{name}</p>
      </StyledLink>
    </SmallRectangleCard>
  );
}

RecommendCard.propTypes = {
  img: string,
  name: string,
};

export default RecommendCard;
