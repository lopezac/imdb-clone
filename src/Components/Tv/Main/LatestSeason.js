import { object } from "prop-types";

import { getYear } from "../../../Utils/format";
import { getImg } from "../../../Utils/various";
import {
  FlexColumnDiv,
  BorderRowWrapper,
} from "../../../Assets/Styles/Wrapper";
import { SmallestSubTitle, SmallBlack } from "../../../Assets/Styles/Para";
import { SeasonImg } from "../../../Assets/Styles/Image";

function LatestSeason(seasons) {
  if (!seasons) return;

  function getSeason(seasons) {
    return seasons.seasons[seasons.seasons.length - 1];
  }

  const season = getSeason(seasons);

  return (
    <FlexColumnDiv>
      <SmallestSubTitle>Last Season</SmallestSubTitle>
      <BorderRowWrapper>
        <SeasonImg src={getImg(season.poster_path)} alt={season.name} />
        <div>
          <SmallestSubTitle>{season.name}</SmallestSubTitle>
          <SmallBlack>
            {getYear(season.air_date)} | {season.episode_count} Episodes
          </SmallBlack>
          <p>{season.overview}</p>
        </div>
      </BorderRowWrapper>
      <p>View All Seasons</p>
    </FlexColumnDiv>
  );
}

LatestSeason.propTypes = {
  season: object,
};

export default LatestSeason;
