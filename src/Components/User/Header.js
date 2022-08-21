import { object } from "prop-types";

import { getMonthAndYear } from "../../Utils/format";

function Header({ user }) {
  return (
    <div>
      <img src={user.photoURL} alt={user.name} />
      <h1>{user.name}</h1>
      <p>Member since {getMonthAndYear(user.createdAt)}</p>
    </div>
  );
}

Header.propTypes = {
  user: object,
};

export default Header;
