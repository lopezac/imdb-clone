import { useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";

import PersonPage from "../../Components/Person";
import { getPersonData } from "../../Config/tmdb-api";

function Person() {
  const [data, setData] = useState(null);
  const personId = useParams().personId;

  useEffect(() => {
    getPersonData(personId).then((personData) => setData(personData));
  }, [personId]);

  return (
    <Routes>
      <Route path="/" element={<PersonPage data={data} />} />
    </Routes>
  );
}

export default Person;
