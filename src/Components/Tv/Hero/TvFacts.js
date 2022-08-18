import { number, array } from "prop-types";
import { formatArray, formatMinutes } from "../../../Utils/format";

function TvFacts({ genres, runtime }) {
  return (
    <div>
      <p>{formatArray(genres)}</p>
      <p>{runtime}m</p>
    </div>
  );
}

TvFacts.propTypes = {
  genres: array,
  runtime: number,
};

export default TvFacts;
