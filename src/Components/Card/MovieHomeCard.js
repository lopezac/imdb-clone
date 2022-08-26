import { string, number } from "prop-types";

import { MovieImg } from "../../Assets/Styles/Image";
import { StyledLink } from "../../Assets/Styles/Link";
import { GrayPara, MovieCardTitle } from "../../Assets/Styles/Para";
import { formatDateShort } from "../../Utils/format";
import { getImg } from "../../Utils/various";

function MovieHomeCard({ img, title, date, section, id }) {
  return (
    <li>
      <StyledLink to={`/${section}/${id}`}>
        <MovieImg src={getImg(img)} alt={title} width="150" />
        <div>
          <MovieCardTitle>{title}</MovieCardTitle>
          <GrayPara>{formatDateShort(date)}</GrayPara>
        </div>
      </StyledLink>
    </li>
  );
}

MovieHomeCard.propTypes = {
  img: string,
  title: string,
  date: string,
  section: string,
  id: number,
};

export default MovieHomeCard;
