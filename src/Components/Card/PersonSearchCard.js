import { string, number, array } from "prop-types";

import { LiFlexRow } from "../../Assets/Styles/Card";
import { SquareSmallImg } from "../../Assets/Styles/Image";
import { StyledLink } from "../../Assets/Styles/Link";
import { SmallerPara, StrongMediumPara } from "../../Assets/Styles/Para";
import { CenterNoBorderDiv } from "../../Assets/Styles/Wrapper";
import { getImg, getTitle } from "../../Utils/various";

function PersonSearchCard({ img, name, id, mainRoles, department }) {
  function formatArrayLine(array) {
    console.log("array name", name);
    return array.map((item) => getTitle(item) + ", ");
  }

  return (
    <LiFlexRow>
      <StyledLink to={`/person/${id}`}>
        <SquareSmallImg src={getImg(img)} alt={name} width="50" />
      </StyledLink>
      <CenterNoBorderDiv>
        <StrongMediumPara>{name}</StrongMediumPara>
        <SmallerPara>
          {department} | {formatArrayLine(mainRoles)}
        </SmallerPara>
      </CenterNoBorderDiv>
    </LiFlexRow>
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
