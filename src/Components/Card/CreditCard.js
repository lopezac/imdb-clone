import { string, number } from "prop-types";
import { StyledLink } from "../../Assets/Styles/Link";

import { getYear } from "../../Utils/format";

function CreditCard({ character, episodes, title, date, id }) {
  return (
    <li>
      <StyledLink to={`/movie/${id}`}>
        {date && getYear(date)} <strong>{title}</strong> as {character}
      </StyledLink>
    </li>
  );
}

CreditCard.propTypes = {
  character: string,
  episodes: number,
  title: string,
  date: string,
  id: number,
};

export default CreditCard;
