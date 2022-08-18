import { object } from "prop-types";

import { getYear } from "../../../Utils/format";
import { getImg } from "../../../Utils/various";

function LatestSeason(seasons) {
  if (!seasons) return;

  function getSeason(seasons) {
    return seasons.seasons[seasons.seasons.length - 1];
  }

  const season = getSeason(seasons);

  return (
    <div>
      <h2>Last Season</h2>
      <div>
        <img src={getImg(season.poster_path)} alt={season.name} width="125" />
        <div>
          <h3>{season.name}</h3>
          <p>
            {getYear(season.air_date)} | {season.episode_count} Episodes
          </p>
          <p>{season.overview}</p>
        </div>
      </div>
      <p>View All Seasons</p>
    </div>
  );
}

LatestSeason.propTypes = {
  season: object,
};

export default LatestSeason;
