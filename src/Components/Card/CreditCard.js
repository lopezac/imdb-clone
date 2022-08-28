import { string, number } from "prop-types";
import { BsCircle } from "react-icons/bs";

import { getYear } from "../../Utils/format";
import { StyledLink } from "../../Assets/Styles/Link";
import { LiBorderInfo } from "../../Assets/Styles/Card";

function CreditCard({ character, episodes, title, date, id }) {
  return (
    <LiBorderInfo>
      <StyledLink to={`/movie/${id}`}>
        {date && getYear(date)} <BsCircle /> <strong>{title}</strong> as{" "}
        {character}
      </StyledLink>
    </LiBorderInfo>
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
