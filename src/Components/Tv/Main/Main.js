import { object } from "prop-types";

import Media from "../../Movie/Main/Media";
import Recommendations from "../../Movie/Main/Recommendations";
import TopBilledCast from "../../Movie/Main/TopBilledCast";
import { MainDiv } from "../../Movie/MovieDivs";
import LatestSeason from "./LatestSeason";

function Main({ data }) {
  return (
    <MainDiv>
      <TopBilledCast cast={data.aggregate_credits.cast} />
      <LatestSeason seasons={data.seasons} />
      <Media images={data.images} videos={data.videos} />
      <Recommendations data={data.recommendations.results} />
    </MainDiv>
  );
}

Main.propTypes = {
  data: object,
};

export default Main;
