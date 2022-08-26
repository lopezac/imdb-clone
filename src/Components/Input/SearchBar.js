import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { SearchBtn } from "../../Assets/Styles/Button";
import { SearchForm, SearchInput } from "../../Assets/Styles/Input";

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
    <SearchForm onSubmit={handleSubmit}>
      <FaSearch />
      <SearchInput
        type="text"
        name="searchQuery"
        onChange={handleChange}
        placeholder="Search for a movie, tv show, person...."
      />
      <SearchBtn type="submit">Search</SearchBtn>
    </SearchForm>
  );
}

export default SearchBar;
