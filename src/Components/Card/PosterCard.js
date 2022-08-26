import { string } from "prop-types";

import { getImg } from "../../Utils/various";
import { PosterImg } from "../../Assets/Styles/Image";

function PosterCard({ url, name = "", width = "150" }) {
  return (
    <>
      <PosterImg src={getImg(url)} width={width} alt={name} />
    </>
  );
}

PosterCard.propTypes = {
  name: string,
  url: string,
};

export default PosterCard;
