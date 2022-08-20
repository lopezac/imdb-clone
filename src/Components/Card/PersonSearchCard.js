import { string, number, array } from "prop-types";
import { StyledLink } from "../../Assets/Styles/Link";
import { getImg, getTitle } from "../../Utils/various";

function PersonSearchCard({ img, name, id, mainRoles, department }) {
  function formatArrayLine(array) {
    console.log("array", array, mainRoles);
    return array.map((item) => getTitle(item) + ", ");
  }

  return (
    <li>
      <StyledLink to={`/person/${id}`}>
        <img src={getImg(img)} alt={name} width="50" />
        <h2>{name}</h2>
        <p>
          {department} | {formatArrayLine(mainRoles)}
        </p>
      </StyledLink>
    </li>
  );
}

PersonSearchCard.propTypes = {
  img: string,
  name: string,
  id: number,
  mainRoles: array,
  department: string,
};

export default PersonSearchCard;
