import { number, string } from "prop-types";
import { StyledLink } from "../../Assets/Styles/Link";

import { getImg } from "../../Utils/various";
import { SeasonImg } from "../../Assets/Styles/Image";
import { CenterCard } from "../../Assets/Styles/Card";
import { SmallPara } from "../../Assets/Styles/Para";

function KnownMovieCard({ id, img, title }) {
  return (
    <CenterCard>
      <StyledLink to={`/movie/${id}`}>
        <SeasonImg src={getImg(img)} alt={title} width="100" />
        <SmallPara>{title}</SmallPara>
      </StyledLink>
    </CenterCard>
  );
}

KnownMovieCard.propTypes = {
  id: number,
  img: string,
  title: string,
};

export default KnownMovieCard;
