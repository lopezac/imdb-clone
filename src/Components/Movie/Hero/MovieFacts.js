import { number, array, string } from "prop-types";

import { RowDotList } from "../../../Assets/Styles/List";
import { formatDate, formatArray, formatMinutes } from "../../../Utils/format";

function MovieFacts({ release_date, genres, runtime }) {
  return (
    <RowDotList>
      <li>{formatDate(release_date)}</li>
      <li>{formatArray(genres)}</li>
      <li>{formatMinutes(runtime)}</li>
    </RowDotList>
  );
}

MovieFacts.propTypes = {
  release_date: string,
  genres: array,
  runtime: number,
};

export default MovieFacts;
