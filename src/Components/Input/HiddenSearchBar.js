import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { NavbarSearchBar } from "../../Assets/Styles/SearchBar";
import SearchBar from "./SearchBar";

function HiddenSearchBar() {
  const [visible, setVisible] = useState(false);

  function toggleVisible() {
    setVisible(!visible);
  }

  return (
    <div>
      <FaSearch onClick={toggleVisible} />
      {visible && (
        <NavbarSearchBar>
          <SearchBar />
        </NavbarSearchBar>
      )}
    </div>
  );
}

export default HiddenSearchBar;
