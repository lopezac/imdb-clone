import { useContext, useState, useEffect } from "react";

import { FirebaseContext } from "../../Config/firebase-context";
import noImage from "../../Assets/Images/no-user.jpg";
import { StyledLink } from "../../Assets/Styles/Link";

function UserInfo() {
  const firebase = useContext(FirebaseContext);
  console.log("currentUser", firebase.auth().currentUser);
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      user ? setCurrentUser(user) : setCurrentUser(null);
    });
  }, []);

  return (
    <div>
      {currentUser ? (
        <StyledLink to={`/user/${currentUser.uid}`}>
          <img
            src={firebase.getProfileImgUrl()}
            alt={firebase.getUserName()}
            width="50"
          />
        </StyledLink>
      ) : (
        <img src={noImage} alt="no-user" width="50" />
      )}
    </div>
  );
}

export default UserInfo;
