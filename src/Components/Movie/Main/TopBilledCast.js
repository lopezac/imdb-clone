import { array } from "prop-types";

import ActorCard from "../../Card/ActorCard";
import { useIsAMovie } from "../../../Utils/various";
import { Scroller } from "../../../Assets/Styles/List";
import { StrongPara, SmallestSubTitle } from "../../../Assets/Styles/Para";
import { SectionDiv } from "../MovieDivs";

function TopBilledCast({ cast }) {
  const topBilledCast = get(cast);

  function get(cast) {
    return cast.slice(0, 9);
  }

  return (
    <SectionDiv>
      <SmallestSubTitle>
        {useIsAMovie() ? "Top Billed" : "Series"} Cast
      </SmallestSubTitle>
      <Scroller>
        {topBilledCast.map((actor) => {
          return (
            <ActorCard
              key={actor.name}
              name={actor.name}
              character={actor.character}
              img={actor.profile_path}
              id={actor.id}
            />
          );
        })}
        <li>View more</li>
      </Scroller>
      <StrongPara>Full Cast & Crew</StrongPara>
    </SectionDiv>
  );
}

TopBilledCast.propTypes = {
  cast: array,
};

export default TopBilledCast;
