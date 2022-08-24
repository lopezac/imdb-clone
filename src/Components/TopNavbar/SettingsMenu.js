import { useContext } from "react";
import { object } from "prop-types";

import { StyledLink } from "../../Assets/Styles/Link";
import { FirebaseContext } from "../../Config/firebase-context";
import SignOutBtn from "./SignOutBtn";

function SettingsMenu({ currentUser }) {
  const firebase = useContext(FirebaseContext);

  return (
    <div>
      <ul>
        <StyledLink to={`/user/${currentUser.uid}`}>
          <li>{firebase.getUserName()}</li>
          <li>View profile</li>
        </StyledLink>
      </ul>
      <ul>
        <li>Discussions</li>
        <li>Lists</li>
        <li>Ratings</li>
        <li>Watchlist</li>
      </ul>
      <ul>
        <li>Edit Profile</li>
        <li>Settings</li>
      </ul>
      <ul>
        <SignOutBtn />
      </ul>
    </div>
  );
}

SettingsMenu.propTypes = {
  currentUser: object,
};

export default SettingsMenu;
