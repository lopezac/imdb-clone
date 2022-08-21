import { string, number } from "prop-types";

function MovieUserCard({ title, date, overview, img, id }) {
  return <li></li>;
}

MovieUserCard.propTypes = {
  title: string,
  date: string,
  overview: string,
  img: string,
  id: number,
};

export default MovieUserCard;
