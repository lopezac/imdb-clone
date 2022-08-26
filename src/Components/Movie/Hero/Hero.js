import { object } from "prop-types";

import CreatorsList from "./CreatorsList";
import { getImg, isAMovieOrTv } from "../../../Utils/various";
import HeroButtons from "./HeroButtons";
import Overview from "./Overview";
import Title from "./Title";
import MovieFacts from "./MovieFacts";
import PosterCard from "../../Card/PosterCard";
import { HeroDiv, HeroInfoDiv } from "../MovieDivs";

function Hero({ data }) {
  console.log(data);
  return (
    <HeroDiv>
      <PosterCard
        url={getImg(data.poster_path)}
        name={data.title}
        width="300"
      />
      <HeroInfoDiv>
        <Title title={data.title} release_date={data.release_date} />
        <MovieFacts
          release_date={data.release_date}
          genres={data.genres}
          runtime={data.runtime}
        />
        <HeroButtons movieId={data.id} mediaType={isAMovieOrTv(data)} />
        <Overview tagline={data.tagline} overview={data.overview} />
        <CreatorsList crew={data.credits.crew} />
      </HeroInfoDiv>
    </HeroDiv>
  );
}

Hero.propTypes = {
  data: object,
};

export default Hero;
