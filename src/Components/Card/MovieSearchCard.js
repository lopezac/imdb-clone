import { string, number } from "prop-types";
import { StyledLink } from "../../Assets/Styles/Link";

import { getImg } from "../../Utils/various";

function MovieSearchCard({ img, title, date, overview, id, section }) {
  return (
    <li>
      <StyledLink to={`/${section}/${id}`}>
        <img src={getImg(img)} alt={title} width="100" />
        <div>
          <h3>{title}</h3>
          <p>{date}</p>
          <p>{overview}</p>
        </div>
      </StyledLink>
    </li>
  );
}

MovieSearchCard.propTypes = {
  img: string,
  title: string,
  date: string,
  overview: string,
  id: number,
  section: string,
};

export default MovieSearchCard;
