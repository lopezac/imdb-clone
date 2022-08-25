import { MenuList } from "../../../Assets/Styles/List";
import { DropdownMenu } from "../../../Assets/Styles/Menu";

export default function TVMenu() {
  return (
    <DropdownMenu>
      <MenuList>
        <li>Popular</li>
        <li>Airing Today</li>
        <li>On TV</li>
        <li>Top Rated</li>
      </MenuList>
    </DropdownMenu>
  );
}
