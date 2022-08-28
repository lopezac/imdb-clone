import { array } from "prop-types";
import { useEffect, useState } from "react";

import { WrapList } from "../../../Assets/Styles/List";
import { SmallWhitePara, StrongSmallPara } from "../../../Assets/Styles/Para";

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
    <WrapList>
      {creators.map((name) => {
        return (
          <li key={name}>
            <StrongSmallPara>{name}</StrongSmallPara>
            <SmallWhitePara>Creator</SmallWhitePara>
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
