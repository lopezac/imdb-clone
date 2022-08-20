import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/search/${input}`, { replace: true });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="searchQuery"
        onChange={handleChange}
        placeholder="Search for a movie, tv show, person...."
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
