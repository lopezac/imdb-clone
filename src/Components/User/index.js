import { Outlet } from "react-router-dom";
import { object } from "prop-types";

import Hero from "./Hero";

function User({ userData }) {
  return (
    <div>
      <Hero user={userData} />
      <Outlet />
    </div>
  );
}

User.propTypes = {
  userData: object,
};

export default User;
