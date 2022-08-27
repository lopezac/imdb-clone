import { string } from "prop-types";

import { GrayThinSpan, MovieTitle } from "../../../Assets/Styles/Para";
import { getYear } from "../../../Utils/format";

function TitleHeader({ title, release_date }) {
  return (
    <MovieTitle>
      {title} <GrayThinSpan>({getYear(release_date)})</GrayThinSpan>
    </MovieTitle>
  );
}

TitleHeader.propTypes = {
  title: string,
  release_date: string,
};

export default TitleHeader;
