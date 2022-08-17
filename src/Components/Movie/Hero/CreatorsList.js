import { array } from "prop-types";
import { useEffect, useState } from "react";
import { joinUpperCase } from "../../../Utils/format";
import { pushToObject } from "../../../Utils/various";

function CreatorsList({ crew }) {
  const [creators, setCreators] = useState({});
  const mainRoles = ["characters", "director", "writer", "screenplay", "story"];

  useEffect(() => {
    const newCreators = getCreators(crew);
    setCreators(newCreators);
  }, []);

  function getCreators(crew) {
    let tempCreators = {};
    for (const member of crew) {
      const job = member.job.toLowerCase();
      if (!mainRoles.includes(job)) continue;
      pushToObject(tempCreators, member.name, job);
    }
    return tempCreators;
  }

  if (!creators) return null;
  return (
    <ul>
      {Object.entries(creators).map(([name, jobs]) => {
        return (
          <li key={name}>
            <p>{name}</p>
            <p>{joinUpperCase(jobs)}</p>
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
