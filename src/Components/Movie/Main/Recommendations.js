import { array } from "prop-types";

import { Scroller } from "../../../Assets/Styles/List";
import RecommendCard from "../../Card/RecommendCard";
import { SectionDiv } from "../MovieDivs";

function Recommendations({ data }) {
  if (!data || !data.length) return;

  function getTitle(movie) {
    return movie.title ? movie.title : movie.name;
  }

  return (
    <SectionDiv>
      <h2>Recommendations</h2>
      <Scroller>
        {data.map((movie) => {
          return (
            <RecommendCard
              key={movie.id}
              name={getTitle(movie)}
              img={movie.backdrop_path}
              id={movie.id}
            />
          );
        })}
      </Scroller>
    </SectionDiv>
  );
}

Recommendations.propTypes = {
  data: array,
};

export default Recommendations;
