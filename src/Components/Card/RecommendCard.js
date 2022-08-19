import { string } from "prop-types";

import { StyledLink } from "../../Assets/Styles/Link";
import { getImg } from "../../Utils/various";

function RecommendCard({ img, name, id }) {
  return (
    <li>
      <StyledLink to={`/movie/${id}`}>
        <img src={getImg(img)} alt={name} width="250" />
        <p>{name}</p>
      </StyledLink>
    </li>
  );
}

RecommendCard.propTypes = {
  img: string,
  name: string,
};

export default RecommendCard;
