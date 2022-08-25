import { useContext } from "react";
import { object } from "prop-types";

import { StyledLink } from "../../../Assets/Styles/Link";
import { FirebaseContext } from "../../../Config/firebase-context";
import SignOutBtn from "../SignOutBtn";
import { MainMenuList, MenuList } from "../../../Assets/Styles/List";
import { RightDropdownMenu } from "../../../Assets/Styles/Menu";
import { SmallBlack, SmallerLightGray } from "../../../Assets/Styles/Para";

function SettingsMenu({ currentUser }) {
  const firebase = useContext(FirebaseContext);

  return (
    <RightDropdownMenu>
      <MainMenuList>
        <StyledLink to={`/user/${currentUser.uid}`}>
          <SmallBlack>{firebase.getUserName()}</SmallBlack>
          <SmallerLightGray>View profile</SmallerLightGray>
        </StyledLink>
      </MainMenuList>
      <MenuList>
        <li>
          <StyledLink to={`/user/${currentUser.uid}/ratings`}>
            Ratings
          </StyledLink>
        </li>
        <li>Discussions</li>
        <li>Lists</li>
        <li>
          <StyledLink to={`/user/${currentUser.uid}/watchlist`}>
            Watchlist
          </StyledLink>
        </li>
      </MenuList>
      <MenuList>
        <li>Edit Profile</li>
        <li>Settings</li>
      </MenuList>
      <MenuList>
        <SignOutBtn />
      </MenuList>
    </RightDropdownMenu>
  );
}

SettingsMenu.propTypes = {
  currentUser: object,
};

export default SettingsMenu;
