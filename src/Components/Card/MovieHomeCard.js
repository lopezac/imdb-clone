import { string, number } from "prop-types";
import { StyledLink } from "../../Assets/Styles/Link";

import { formatDate } from "../../Utils/format";
import { getImg } from "../../Utils/various";

function MovieHomeCard({ img, title, date, section, id }) {
  return (
    <li>
      <StyledLink to={`/${section}/${id}`}>
        <img src={getImg(img)} alt={title} width="150" />
        <div>
          <h3>{title}</h3>
          <p>{formatDate(date)}</p>
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
