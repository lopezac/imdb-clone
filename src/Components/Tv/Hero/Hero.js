import { object } from "prop-types";
import useImageColor from "use-image-color";
import { useState, useEffect, useCallback } from "react";

import TvFacts from "./TvFacts";
import { getImg } from "../../../Utils/various";
import Title from "./Title";
import HeroButtons from "../../Movie/Hero/HeroButtons";
import Overview from "../../Movie/Hero/Overview";
import CreatorsList from "./CreatorsList";
import { HeroDiv, HeroInfoDiv } from "../../Movie/MovieDivs";
import PosterCard from "../../Card/PosterCard";

function Hero({ data }) {
  const { colors } = useImageColor(getImg(data.backdrop_path), {
    cors: true,
    colors: 5,
  });
  return (
    <HeroDiv img={getImg(data.backdrop_path)} color={colors}>
      <PosterCard
        url={getImg(data.poster_path)}
        name={data.title}
        width="300"
      />
      <HeroInfoDiv>
        <Title title={data.name} airDate={data.first_air_date} />
        <TvFacts genres={data.genres} runtime={data.episode_run_time[0]} />
        <HeroButtons />
        <Overview tagline={data.tagline} overview={data.overview} />
        <CreatorsList created_by={data.created_by} />
      </HeroInfoDiv>
    </HeroDiv>
  );
}

Hero.propTypes = {
  data: object,
};

export default Hero;
