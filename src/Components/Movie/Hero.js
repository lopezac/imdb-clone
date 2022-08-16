import {
  getYear,
  formatDate,
  formatArray,
  formatMinutes,
} from "../../Utils/format";
import { object } from "prop-types";

import CreatorsList from "./CreatorsList";
import { getImg } from "../../Utils/various";

function Hero({ data }) {
  console.log("data at hero", data);
  return (
    <div>
      <img src={getImg(data.poster_path)} width="300" alt={data.title} />
      <div>
        <h1>
          {data.title} <span>({getYear(data.release_date)})</span>
        </h1>
        <div>
          <p>{formatDate(data.release_date)}</p>
          <p>{formatArray(data.genres)}</p>
          <p>{formatMinutes(data.runtime)}</p>
        </div>
        <div>
          <button>Add to favorites</button>
          <button>Add to watchlist</button>
          <button>Rate</button>
          <button>Play trailer</button>
        </div>
        <p>{data.tagline}</p>
        <div>
          <h3>Overview</h3>
          <p>{data.overview}</p>
        </div>
        <CreatorsList crew={data.credits.crew} />
      </div>
    </div>
  );
}

Hero.propTypes = {
  data: object,
};

export default Hero;
