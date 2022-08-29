import { string, number } from "prop-types";

import { getImg } from "../../Utils/various";
import { StyledLink } from "../../Assets/Styles/Link";
import { LiFlexRow } from "../../Assets/Styles/Card";
import { BorderCenterDiv } from "../../Assets/Styles/Wrapper";
import { SearchImg } from "../../Assets/Styles/Image";
import TitleDate from "../Reusable/TitleDate";

function MovieSearchCard({ img, title, date, overview, id, section }) {
  return (
    <LiFlexRow>
      <StyledLink to={`/${section}/${id}`}>
        <SearchImg src={getImg(img)} alt={title} width="100" />
      </StyledLink>
      <BorderCenterDiv>
        <TitleDate
          id={id}
          section={section}
          overview={overview}
          title={title}
          date={date}
        />
      </BorderCenterDiv>
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
