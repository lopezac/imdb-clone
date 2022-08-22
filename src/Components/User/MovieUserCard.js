import { string, number } from "prop-types";
import { StyledLink } from "../../Assets/Styles/Link";

import { getImg } from "../../Utils/various";

function MovieUserCard({ title, date, overview, img, id, mediaType }) {
  return (
    <li>
      <StyledLink to={`/${mediaType}/${id}`}>
        <img src={getImg(img)} alt={title} width="125" />
        <div>
          <h2>{title}</h2>
          <p>{date}</p>
          <p>{overview}</p>
          <button>Favorite</button>
          <button>Rating</button>
          <button>Remove</button>
        </div>
      </StyledLink>
    </li>
  );
}

MovieUserCard.propTypes = {
  title: string,
  date: string,
  overview: string,
  img: string,
  id: number,
  mediaType: string,
};

export default MovieUserCard;
