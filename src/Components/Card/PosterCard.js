import {string} from "prop-types";

import {getImg} from "../../Utils/various";

function PosterCard({url}) {
  return (
    <>
      <img src={getImg(url)} width="150" />
    </>
  )
}

PosterCard.propTypes = {
  name: string,
  url: string
}

export default PosterCard;
