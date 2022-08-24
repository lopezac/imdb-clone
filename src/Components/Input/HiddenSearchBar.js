import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import SearchBar from "./SearchBar";

function HiddenSearchBar() {
  const [visible, setVisible] = useState(false);

  function toggleVisible() {
    setVisible(!visible);
  }

  return (
    <div>
      <FaSearch onClick={toggleVisible} />
      {visible && <SearchBar />}
    </div>
  );
}

export default HiddenSearchBar;
