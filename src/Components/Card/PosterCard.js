import { string } from "prop-types";

import { getImg } from "../../Utils/various";

function PosterCard({ url, name = "", width = "150" }) {
  return (
    <>
      <img src={getImg(url)} width={width} alt={name} />
    </>
  );
}

PosterCard.propTypes = {
  name: string,
  url: string,
};

export default PosterCard;
