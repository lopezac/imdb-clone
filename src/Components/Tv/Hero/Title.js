import { string } from "prop-types";

import { GrayThinSpan, MovieTitle } from "../../../Assets/Styles/Para";
import { getYear } from "../../../Utils/format";

function Title({ title, airDate }) {
  return (
    <MovieTitle>
      {title} <GrayThinSpan>({getYear(airDate)})</GrayThinSpan>
    </MovieTitle>
  );
}

Title.propTypes = {
  title: string,
  airDate: string,
};

export default Title;
