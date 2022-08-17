import { object } from "prop-types";

import CreatorsList from "./CreatorsList";
import { getImg } from "../../../Utils/various";
import { HeroDiv } from "../../../Assets/Styles/MovieDivs";
import HeroButtons from "./HeroButtons";
import Overview from "./Overview";
import Title from "./Title";
import MovieFacts from "./MovieFacts";

function Hero({ data }) {
  return (
    <HeroDiv>
      <img src={getImg(data.poster_path)} width="300" alt={data.title} />
      <div>
        <Title title={data.title} release_date={data.release_date} />
        <MovieFacts
          release_date={data.release_date}
          genres={data.genres}
          runtime={data.runtime}
        />
        <HeroButtons />
        <Overview tagline={data.tagline} overview={data.overview} />
        <CreatorsList crew={data.credits.crew} />
      </div>
    </HeroDiv>
  );
}

Hero.propTypes = {
  data: object,
};

export default Hero;
