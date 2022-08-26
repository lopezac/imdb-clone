import { useContext, useState, useEffect } from "react";

import { FirebaseContext } from "../../Config/firebase-context";
import TMDBLogo from "../../Assets/Images/TMDB-big-logo.svg";
import { BigBtn } from "../../Assets/Styles/Button";
import { JoinColumn, FooterLogo } from "./FooterStyle";

export default function LogoColumn() {
  const firebase = useContext(FirebaseContext);
  const [greeting, setGreeting] = useState("");
 
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setGreeting(user ? `Hi ${user.displayName}!` : "Join The Community");
    });
  }, []);

  return (
    <JoinColumn>
      <FooterLogo src={TMDBLogo} alt="The Movie Database (TMBD) logo" width="130"/>
      <BigBtn>{greeting}</BigBtn>
    </JoinColumn>
  );
};
