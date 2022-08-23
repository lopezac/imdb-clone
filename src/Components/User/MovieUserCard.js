import { string, number, object } from "prop-types";
import { StyledLink } from "../../Assets/Styles/Link";

import { getImg } from "../../Utils/various";
import FavoriteBtn from "../Buttons/FavoriteBtn";
import RateBtn from "../Buttons/RateBtn";
import RemoveBtn from "../Buttons/RemoveBtn";
import WatchlistBtn from "../Buttons/WatchlistBtn";

function MovieUserCard({
  title,
  date,
  overview,
  img,
  id,
  mediaType,
  userData,
}) {
  if (!userData) return;
  console.log("userData, ", userData);
  return (
    <li>
      <StyledLink to={`/${mediaType}/${id}`}>
        <img src={getImg(img)} alt={title} width="125" />
      </StyledLink>
      <div>
        <StyledLink to={`/${mediaType}/${id}`}>
          <h2>{title}</h2>
        </StyledLink>
        <p>{date}</p>
        <p>{overview}</p>
        <FavoriteBtn />
        <WatchlistBtn />
        <RateBtn rating={userData.ratings} mediaType={mediaType} movieId={id} />
        <RemoveBtn movieId={id} mediaType={mediaType} />
      </div>
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
  userData: object,
};

export default MovieUserCard;
