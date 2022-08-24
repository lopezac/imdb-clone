import { useContext, useEffect, useState } from "react";

import { FirebaseContext } from "../../Config/firebase-context";

function SignInBtn() {
  const firebase = useContext(FirebaseContext);
  const [isUserSignedIn, setIsUserSignedIn] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log("user auth", user);
      setIsUserSignedIn(user ? true : false);
    });
  }, []);

  return (
    !isUserSignedIn && (
      <button onClick={firebase.handleSignIn}>Join TMDB</button>
    )
  );
}

export default SignInBtn;
