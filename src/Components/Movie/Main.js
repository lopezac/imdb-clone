import { object } from "prop-types";

import TopBilledCast from "./TopBilledCast";
import Reviews from "./Reviews";
import Media from "./Media";
import Collection from "./Collection";
import Recommendations from "./Recommendations";

function Main({ data }) {
  console.log(data.belongs_to_collection)
  return (
    <div>
      <TopBilledCast cast={data.credits.cast} />
      <Reviews />
      <Media images={data.images} videos={data.videos} />
      <Collection data={data.belongs_to_collection} />
      <Recommendations data={data.recommendations.results} />
    </div>
  );
}

Main.propTypes = {
  data: object,
};

export default Main;
