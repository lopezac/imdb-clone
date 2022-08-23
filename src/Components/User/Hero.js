import { object } from "prop-types";

import Header from "./Header";
import UserNavbar from "./UserNavbar";

function Hero({ user }) {
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
