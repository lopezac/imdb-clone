import { Outlet } from "react-router-dom";
import { object } from "prop-types";

import { ColumnFlex } from "../../Assets/Styles/Wrapper";

import Hero from "./Hero";

function User({ userData }) {
  return (
    <ColumnFlex>
      <Hero user={userData} />
      <Outlet />
    </ColumnFlex>
  );
}

User.propTypes = {
  userData: object,
};

export default User;
