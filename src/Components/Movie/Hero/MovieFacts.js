import { number, array, string } from "prop-types";
import { formatDate, formatArray, formatMinutes } from "../../../Utils/format";

function MovieFacts({ release_date, genres, runtime }) {
  console.log("array genres", genres);
  return (
    <div>
      <p>{formatDate(release_date)}</p>
      <p>{formatArray(genres)}</p>
      <p>{formatMinutes(runtime)}</p>
    </div>
  );
}

MovieFacts.propTypes = {
  release_date: string,
  genres: array,
  runtime: number,
};

export default MovieFacts;
