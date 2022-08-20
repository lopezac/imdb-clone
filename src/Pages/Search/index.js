import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getSearch } from "../../Config/tmdb-api";
import SearchPage from "../../Components/Search/Main";
import SettingsPanel from "../../Components/Search/SettingsPanel";
import { SearchDiv } from "../../Assets/Styles/SearchDivs";

function Search() {
  const query = useParams().query;
  const [data, setData] = useState(null);
  const [section, setSection] = useState("movie");
  const [page, setPage] = useState(1);

  useEffect(() => {
    queryData();
  }, [query, page, section]);

  useEffect(() => {
    if (!data) return;
    console.log("data", data);
  }, [data]);

  function queryData() {
    getSearch(query, page, section).then((result) => setData(result.results));
  }

  function updateSection(value) {
    setSection(value);
  }

  return (
    <SearchDiv>
      <SearchPage data={data} section={section} />
      <SettingsPanel data={data} updateSection={updateSection} />
    </SearchDiv>
  );
}

export default Search;
