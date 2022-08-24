import { useContext, useState, useEffect } from "react";

import { FirebaseContext } from "../../Config/firebase-context";
import noImage from "../../Assets/Images/no-user.jpg";
import SettingsMenu from "./SettingsMenu";

function UserInfo() {
  const firebase = useContext(FirebaseContext);
  const [currentUser, setCurrentUser] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user ? user : null);
    });
  }, []);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <div>
      {currentUser ? (
        <>
          <img
            src={firebase.getProfileImgUrl()}
            alt={firebase.getUserName()}
            width="50"
            onClick={toggleMenu}
          />
          {showMenu && <SettingsMenu currentUser={currentUser} />}
        </>
      ) : (
        <img src={noImage} alt="no-user" width="50" />
      )}
    </div>
  );
}

export default UserInfo;
