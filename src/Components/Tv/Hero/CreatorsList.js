import { array } from "prop-types";
import { useEffect, useState } from "react";

function CreatorsList({ created_by }) {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const newCreators = getCreators(created_by);
    setCreators(newCreators);
  }, []);

  function getCreators(created_by) {
    return created_by.map((creator) => creator.name);
  }

  if (!creators) return null;
  return (
    <ul>
      {creators.map((name) => {
        return (
          <li key={name}>
            <p>{name}</p>
            <p>Creator</p>
          </li>
        );
      })}
    </ul>
  );
}

CreatorsList.propTypes = {
  crew: array,
};

export default CreatorsList;
