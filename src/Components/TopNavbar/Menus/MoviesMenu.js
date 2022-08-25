import { StyledLink } from "../../../Assets/Styles/Link";
import { MenuList } from "../../../Assets/Styles/List";
import { DropdownMenu } from "../../../Assets/Styles/Menu";

export default function MoviesMenu() {
  return (
    <DropdownMenu>
      <MenuList>
        <li>Popular</li>
        <li>Now Playing</li>
        <li>Upcoming</li>
        <li>Top Rated</li>
      </MenuList>
    </DropdownMenu>
  );
}
