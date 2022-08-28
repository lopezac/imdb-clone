import { object, number } from "prop-types";
import { MainDiv } from "../PersonDivs";

import Acting from "./Acting";
import Biography from "./Biography";
import KnownFor from "./KnownFor";
import { SmallTitle } from "../../../Assets/Styles/Para";

function Main({ data }) {
  if (!data) return;
  return (
    <MainDiv>
      <SmallTitle>{data.name}</SmallTitle>
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
