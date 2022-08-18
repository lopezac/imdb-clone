import { object, number } from "prop-types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { MainDiv } from "../../../Assets/Styles/PersonDivs";
import Acting from "./Acting";
import Biography from "./Biography";
import KnownFor from "./KnownFor";

function Main({ data }) {
  if (!data) return;
  return (
    <MainDiv>
      <h1>{data.name}</h1>
      <Biography biography={data.biography} />
      <KnownFor movies={data.movie_credits.cast} />
      <Acting credits={data.combined_credits} />
    </MainDiv>
  );
}

Main.propTypes = {
  data: object,
  id: number,
};

export default Main;
