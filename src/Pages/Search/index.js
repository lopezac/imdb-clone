import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getSearch } from "../../Config/tmdb-api";

function Search() {
  const query = useParams().query;
  const [data, setData] = useState(null);
  const [section, setSection] = useState("movie");
  const [page, setPage] = useState(null);

  useEffect(() => {
    console.log("query", query);
    getSearch(query).then(result => setData(result.results));
    // change data, setPage to 1
  }, [query]);

  useEffect(() => {
    if (!data) return;
    console.log("data", data);
    for (const item of data) {
      if (item.media_type !== section) continue;
      console.log(item, item.media_type)
    }
  }, [data]);

  useEffect(() => {
    // change data
  }, [page]);

  useEffect(() => {
    // change data???
  }, [section]);

  return (
    <div>
      search
    </div>
  );
}

export default Search;
