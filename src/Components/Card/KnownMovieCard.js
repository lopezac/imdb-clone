import { number, string } from "prop-types";
import { StyledLink } from "../../Assets/Styles/Link";

import { getImg } from "../../Utils/various";

function KnownMovieCard({ id, img, title }) {
  return (
    <li>
      <StyledLink to={`/movie/${id}`}>
        <img src={getImg(img)} alt={title} width="100" />
        <p>{title}</p>
      </StyledLink>
    </li>
  );
}

KnownMovieCard.propTypes = {
  id: number,
  img: string,
  title: string,
};

export default KnownMovieCard;
