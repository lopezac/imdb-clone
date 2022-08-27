import { object } from "prop-types";
import useImageColor from "use-image-color";
import { useState, useEffect, useCallback } from "react";

import CreatorsList from "./CreatorsList";
import { getImg, isAMovieOrTv } from "../../../Utils/various";
import HeroButtons from "./HeroButtons";
import Overview from "./Overview";
import TitleHeader from "./Title";
import MovieFacts from "./MovieFacts";
import PosterCard from "../../Card/PosterCard";
import { HeroDiv, HeroInfoDiv } from "../MovieDivs";

function Hero({ data }) {
  console.log(data);
  const { colors } = useImageColor(getImg(data.backdrop_path), {
    cors: true,
    colors: 5,
  });
  console.log("color", colors);
  return (
    <HeroDiv img={getImg(data.backdrop_path)} color={colors}>
      <PosterCard
        url={getImg(data.poster_path)}
        name={data.title}
        width="300"
      />
      <HeroInfoDiv>
        <TitleHeader title={data.title} release_date={data.release_date} />
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
