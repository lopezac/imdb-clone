import { StyledLink } from "../../Assets/Styles/Link";

function UserNavbar() {
  return (
    <ul>
      <li>
        <StyledLink to="favorites">Favorites</StyledLink>
      </li>
      <li>
        <StyledLink to="watchlist">Watchlist</StyledLink>
      </li>
      <li>Reviews</li>
      <li>
        <StyledLink to="ratings">Ratings</StyledLink>
      </li>
    </ul>
  );
}

export default UserNavbar;
