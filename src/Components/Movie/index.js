import Hero from "./Hero/Hero";
import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main/Main";
import { MovieDiv } from "./MovieDivs";

function MoviePage({ data }) {
  if (!data) return;
  console.log("data at movie page", data);
  return (
    <MovieDiv>
      <Hero data={data} />
      <Main data={data} />
      <Sidebar data={data} />
    </MovieDiv>
  );
}

export default MoviePage;
