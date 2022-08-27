import { object } from "prop-types";

import { getImg } from "../../../Utils/various";
import { SectionDiv } from "../MovieDivs";

function Collection({ data }) {
  if (!data) return null;
  return (
    <SectionDiv>
      <img
        src={getImg(data.backdrop_path)}
        alt={data.name}
        width="500"
        height="250"
      />
      <h2>Part of the {data.name}</h2>
      <button>View the collection</button>
    </SectionDiv>
  );
}

Collection.propTypes = {
  data: object,
};

export default Collection;
