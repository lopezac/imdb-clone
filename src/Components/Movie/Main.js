import { object } from "prop-types";

import TopBilledCast from "./TopBilledCast";
import Reviews from "./Reviews";
import Media from "./Media";

function Main({ data }) {
  return (
    <div>
      <TopBilledCast cast={data.credits.cast} />
      <Reviews />
      <Media images={data.images} videos={data.videos} />
    </div>
  );
}

Main.propTypes = {
  data: object,
};

export default Main;
