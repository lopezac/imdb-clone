import Hero from "./Hero/Hero";
import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main/Main";
import { MainContentWrapper, MovieDiv } from "./MovieDivs";

function MoviePage({ data }) {
  if (!data) return;
  console.log("data at movie page", data);
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

export default MoviePage;
