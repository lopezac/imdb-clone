import { object } from "prop-types";

import Header from "./Header";
import UserNavbar from "./UserNavbar";
import { ColumnFlex } from "../../Assets/Styles/Wrapper";

function Hero({ user }) {
  return (
    <ColumnFlex>
      <Header user={user} />
      <UserNavbar />
    </ColumnFlex>
  );
}

Hero.propTypes = {
  user: object,
};

export default Hero;
