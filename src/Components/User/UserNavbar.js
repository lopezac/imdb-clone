import { StyledLink } from "../../Assets/Styles/Link";
import { SmallNav } from "../../Assets/Styles/Navbar";
import { Para } from "../../Assets/Styles/Para";

function UserNavbar() {
  return (
    <SmallNav>
      <Para>
        <StyledLink to="favorites">Favorites</StyledLink>
      </Para>
      <Para>
        <StyledLink to="watchlist">Watchlist</StyledLink>
      </Para>
      <Para>Reviews</Para>
      <Para>
        <StyledLink to="ratings">Ratings</StyledLink>
      </Para>
      <span>Please double click me! except reviews</span>
    </SmallNav>
  );
}

export default UserNavbar;
