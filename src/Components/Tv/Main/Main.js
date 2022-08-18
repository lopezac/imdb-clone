import { object } from "prop-types";

import { MainDiv } from "../../../Assets/Styles/MovieDivs";
import Media from "../../Movie/Main/Media";
import Recommendations from "../../Movie/Main/Recommendations";
import Reviews from "../../Movie/Main/Reviews";
import TopBilledCast from "../../Movie/Main/TopBilledCast";
import LatestSeason from "./LatestSeason";

function Main({ data }) {
  return (
    <MainDiv>
      <TopBilledCast cast={data.aggregate_credits.cast} />
      <LatestSeason seasons={data.seasons} />
      <Reviews />
      <Media images={data.images} videos={data.videos} />
      <Recommendations data={data.recommendations.results} />
    </MainDiv>
  );
}

Main.propTypes = {
  data: object,
};

export default Main;
