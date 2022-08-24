import { useContext } from "react";

import { FirebaseContext } from "../../Config/firebase-context";

function SignOutBtn() {
  const firebase = useContext(FirebaseContext);

  return <li onClick={firebase.signOutUser}>Logout</li>;
}

export default SignOutBtn;
