import { object } from "prop-types";

import { getMonthAndYear } from "../../Utils/format";
import { GapPadBackground, GapBaselineDiv } from "../../Assets/Styles/Wrapper";
import { CircleProfileImg } from "../../Assets/Styles/Image";
import { WhiteMovieTitle, SmallerLightGray } from "../../Assets/Styles/Para";

function Header({ user }) {
  return (
    <GapPadBackground>
      <CircleProfileImg src={user.photoURL} alt={user.name} />
      <GapBaselineDiv>
        <WhiteMovieTitle>{user.name}</WhiteMovieTitle>
        <SmallerLightGray>
          Member since {getMonthAndYear(user.createdAt)}
        </SmallerLightGray>
      </GapBaselineDiv>
    </GapPadBackground>
  );
}

Header.propTypes = {
  user: object,
};

export default Header;
