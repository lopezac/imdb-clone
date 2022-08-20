import { useContext } from "react";
import { FirebaseContext } from "../../Config/firebase-context";

function UserInfo() {
  const firebase = useContext(FirebaseContext);
  console.log("currentUser", firebase.auth().currentUser);

  return (
    <div>
      {/* <img src={firebase.getProfileImgUrl()} alt={firebase.getUserName()} width="50" /> */}
    </div>
  );
}

export default UserInfo;
