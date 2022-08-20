import {useContext} from "react";

import {FirebaseContext} from "../../Config/firebase-context";

function SignOutBtn() {
  const firebase = useContext(FirebaseContext);

  return (<button onClick={firebase.signOutUser}>Sign Out</button>);
}

export default SignOutBtn;
