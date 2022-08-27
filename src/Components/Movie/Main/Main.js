import { object } from "prop-types";

import TopBilledCast from "./TopBilledCast";
import Media from "./Media";
import Collection from "./Collection";
import Recommendations from "./Recommendations";
import { MainDiv } from "../MovieDivs";

function Main({ data }) {
  return (
    <MainDiv>
      <TopBilledCast cast={data.credits.cast} />
      <Media images={data.images} videos={data.videos} />
      <Collection data={data.belongs_to_collection} />
      <Recommendations data={data.recommendations.results} />
    </MainDiv>
  );
}

Main.propTypes = {
  data: object,
};

export default Main;
