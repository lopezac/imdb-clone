import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    console.log(input);
    e.preventDefault();
    navigate(`/search/${input}`, {replace: true});
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="searchQuery" onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
