import { number, array } from "prop-types";

import { formatArray } from "../../../Utils/format";
import { RowDotList } from "../../../Assets/Styles/List";

function TvFacts({ genres, runtime }) {
  return (
    <RowDotList>
      <li>{formatArray(genres)}</li>
      <li>{runtime}m</li>
    </RowDotList>
  );
}

TvFacts.propTypes = {
  genres: array,
  runtime: number,
};

export default TvFacts;
