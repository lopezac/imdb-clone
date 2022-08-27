import { array } from "prop-types";
import { useEffect, useState } from "react";

import { StyledLink } from "../../../Assets/Styles/Link";
import { joinUpperCase } from "../../../Utils/format";
import { WrapList } from "../../../Assets/Styles/List";
import { SmallWhitePara, StrongSmallPara } from "../../../Assets/Styles/Para";

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
      if (!checkValidRole(job)) continue;

      const name = member.name;
      const creatorExists = name in tempCreators;
      if (creatorExists) tempCreators[name]["jobs"].push(job);
      else tempCreators[name] = { jobs: [job], id: member.id };
    }
    return tempCreators;
  }

  function checkValidRole(job) {
    return mainRoles.includes(job);
  }

  return (
    <WrapList>
      {Object.entries(creators).map((creator) => {
        return (
          <li key={creator[0]}>
            <StyledLink to={`/person/${creator[1].id}`}>
              <StrongSmallPara>{creator[0]}</StrongSmallPara>
            </StyledLink>
            <SmallWhitePara>{joinUpperCase(creator[1].jobs)}</SmallWhitePara>
          </li>
        );
      })}
    </WrapList>
  );
}

CreatorsList.propTypes = {
  crew: array,
};

export default CreatorsList;
