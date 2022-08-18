import { object } from "prop-types";

import TvFacts from "./TvFacts";
import { getImg } from "../../../Utils/various";
import Title from "./Title";
import HeroButtons from "../../Movie/Hero/HeroButtons";
import Overview from "../../Movie/Hero/Overview";
import { HeroDiv } from "../../../Assets/Styles/MovieDivs";
import CreatorsList from "./CreatorsList";

function Hero({ data }) {
  return (
    <HeroDiv>
      <img src={getImg(data.poster_path)} width="300" alt={data.title} />
      <div>
        <Title title={data.name} airDate={data.first_air_date} />
        <TvFacts genres={data.genres} runtime={data.episode_run_time[0]} />
        <HeroButtons />
        <Overview tagline={data.tagline} overview={data.overview} />
        <CreatorsList created_by={data.created_by} />
      </div>
    </HeroDiv>
  );
}

Hero.propTypes = {
  data: object,
};

export default Hero;
