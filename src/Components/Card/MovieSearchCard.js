import { string, number } from "prop-types";

import { getImg } from "../../Utils/various";
import { formatDateShort } from "../../Utils/format";
import { StyledLink } from "../../Assets/Styles/Link";
import { LiFlexRow } from "../../Assets/Styles/Card";
import {
  SmallerLightGray,
  OverflowSubTitle,
  OverflowPara,
} from "../../Assets/Styles/Para";

function MovieSearchCard({ img, title, date, overview, id, section }) {
  return (
    <LiFlexRow>
      <StyledLink to={`/${section}/${id}`}>
        <img src={getImg(img)} alt={title} width="100" />
      </StyledLink>
      <div>
        <StyledLink to={`/${section}/${id}`}>
          <OverflowSubTitle>{title}</OverflowSubTitle>
        </StyledLink>
        <SmallerLightGray>{formatDateShort(date)}</SmallerLightGray>
        <OverflowPara>{overview}</OverflowPara>
      </div>
    </LiFlexRow>
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
