import { useContext } from "react";

import { FirebaseContext } from "../../Config/firebase-context";

function SignInBtn() {
  const firebase = useContext(FirebaseContext);

  return <button onClick={firebase.handleSignIn}>Sign In</button>;
}

export default SignInBtn;
