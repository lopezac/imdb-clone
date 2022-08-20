import {useContext} from "react";

import {FirebaseContext} from "../../Config/firebase-context";

function SignInBtn() {
  const firebase = useContext(FirebaseContext);

  return (<button onClick={firebase.signIn}>Sign In</button>);
}

export default SignInBtn;
