import { array } from "prop-types";
import { useEffect, useState } from "react";
import { StyledLink } from "../../../Assets/Styles/Link";
import { joinUpperCase } from "../../../Utils/format";
import { pushToObject } from "../../../Utils/various";

function CreatorsList({ crew }) {
  const [creators, setCreators] = useState({});
  const mainRoles = [
    "characters",
    "director",
    "writer",
    "screenplay",
    "story",
    "creator",
  ];

  useEffect(() => {
    setCreators(getCreators(crew));
  }, []);

  function getCreators(crew) {
    let tempCreators = {};
    for (const member of crew) {
      const job = member.job.toLowerCase();
      if (!mainRoles.includes(job)) continue;
      pushToObject(tempCreators, member.name, job);
      tempCreators[member.name]["id"] = member.id;
      console.log(tempCreators);
    }
    console.log("tempCreators", tempCreators);
    return tempCreators;
  }

  if (!creators.length) return null;
  return (
    <ul>
      {creators.map((creator) => {
        console.log("creator", Object.entries(creator));
        const [name, info] = Object.entries(creator);
        return (
          <li key={name}>
            <StyledLink to={`/person/${info.id}`}>
              <p>{name}</p>
              <p>{info.jobs}</p>
            </StyledLink>
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
