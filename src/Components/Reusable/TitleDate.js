import { string, number } from "prop-types";

import { formatDateShort } from "../../Utils/format";
import { StyledLink } from "../../Assets/Styles/Link";
import {
  SmallerLightGray,
  OverflowSubTitle,
  OverflowPara,
} from "../../Assets/Styles/Para";

function TitleDate({ section, id, title, date, overview }) {
  return (
    <>
      <div>
        <StyledLink to={`/${section}/${id}`}>
          <OverflowSubTitle>{title}</OverflowSubTitle>
        </StyledLink>
        <SmallerLightGray>{formatDateShort(date)}</SmallerLightGray>
      </div>
      <OverflowPara>{overview}</OverflowPara>
    </>
  );
}

TitleDate.propTypes = {
  section: string,
  id: number,
  title: string,
  date: string,
  overview: string,
};

export default TitleDate;
