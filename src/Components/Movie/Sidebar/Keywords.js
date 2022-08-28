import { array } from "prop-types";

import { SmallestSubTitle } from "../../../Assets/Styles/Para";
import { WrapRowsList } from "../../../Assets/Styles/List";
import { LiCardText } from "../../../Assets/Styles/Card";

function Keywords({ keywords }) {
  return (
    <div>
      <SmallestSubTitle>Keywords</SmallestSubTitle>
      <WrapRowsList>
        {keywords.map((keyword) => {
          return <LiCardText key={keyword.name}>{keyword.name}</LiCardText>;
        })}
      </WrapRowsList>
    </div>
  );
}

Keywords.propTypes = {
  data: array,
};

export default Keywords;
