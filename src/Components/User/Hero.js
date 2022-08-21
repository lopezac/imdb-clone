import { object } from "prop-types";

import Header from "./Header";
import UserNavbar from "./UserNavbar";

function Hero({ user }) {
  console.log("user data", user);
  return (
    <div>
      <Header user={user} />
      <UserNavbar />
    </div>
  );
}

Hero.propTypes = {
  user: object,
};

export default Hero;
