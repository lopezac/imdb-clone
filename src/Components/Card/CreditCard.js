import { string, number } from "prop-types";

import { getYear } from "../../Utils/format";

function CreditCard({ character, episodes, title, date }) {
  return (
    <li>
      {date && getYear(date)} <strong>{title}</strong> as {character}
    </li>
  );
}

CreditCard.propTypes = {
  character: string,
  episodes: number,
  title: string,
  date: string,
};

export default CreditCard;
