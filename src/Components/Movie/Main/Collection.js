import { object } from "prop-types";

import { getImg } from "../../../Utils/various";
import { CollectionDiv } from "../MovieDivs";
import { MovieTitle } from "../../../Assets/Styles/Para";
import { VioletBtn } from "../../../Assets/Styles/Button";
import { CenteredWrapper } from "../../../Assets/Styles/Wrapper";

function Collection({ data }) {
  if (!data) return null;
  return (
    <CenteredWrapper>
      <CollectionDiv img={getImg(data.backdrop_path)}>
        <MovieTitle>Part of the {data.name}</MovieTitle>
        <VioletBtn>View the collection</VioletBtn>
      </CollectionDiv>
    </CenteredWrapper>
  );
}

Collection.propTypes = {
  data: object,
};

export default Collection;
