import { object } from "prop-types";

import Hero from "./Hero/Hero";
import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main/Main";
import { MovieDiv, MainContentWrapper } from "../Movie/MovieDivs";

function TvPage({ data }) {
  if (!data) return;
  console.log("data at tv page", data);
  return (
    <MovieDiv>
      <Hero data={data} />
      <MainContentWrapper>
        <Main data={data} />
        <Sidebar data={data} />
      </MainContentWrapper>
    </MovieDiv>
  );
}

TvPage.propTypes = {
  data: object,
};

export default TvPage;
