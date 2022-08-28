import { StyledLink } from "../../Assets/Styles/Link";

import TMDBLogo from "../../Assets/Images/TMDB-logo.svg";
import { Navbar } from "../../Assets/Styles/Navbar";
import { useEffect, useState } from "react";
import MoviesMenu from "./Menus/MoviesMenu";
import TVMenu from "./Menus/TVMenu";
import PeopleMenu from "./Menus/PeopleMenu";
import MoreMenu from "./Menus/MoreMenu";

export default function LeftNav() {
  const [menu, setMenu] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const categories = ["Movies", "TV Shows", "People", "More"];

  useEffect(() => {
    if (categoryName === "Movies") setMenu(<MoviesMenu />);
    else if (categoryName === "TV Shows") setMenu(<TVMenu />);
    else if (categoryName === "People") setMenu(<PeopleMenu />);
    else if (categoryName === "More") setMenu(<MoreMenu />);
  }, [showMenu]);

  function toggleShowMenu(e) {
    setCategoryName(e.target.textContent);
    setShowMenu(true);
  }

  function hideMenu() {
    setCategoryName("");
    setShowMenu(false);
    setMenu(null);
  }

  return (
    <Navbar>
      <StyledLink to="/">
        <img src={TMDBLogo} alt="TMDB logo" width="154" />
      </StyledLink>

      {categories.map((category) => {
        return (
          <li onMouseLeave={hideMenu} key={category}>
            <p onMouseEnter={toggleShowMenu}>{category}</p>
            {showMenu && categoryName === category && menu}
          </li>
        );
      })}
    </Navbar>
  );
}
