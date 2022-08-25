import { MenuList } from "../../../Assets/Styles/List";
import { DropdownMenu } from "../../../Assets/Styles/Menu";

export default function MoreMenu() {
  return (
    <DropdownMenu>
      <MenuList>
        <li>Discussions</li>
        <li>Leaderboard</li>
        <li>Support</li>
        <li>API</li>
      </MenuList>
    </DropdownMenu>
  );
}
