import { array } from "prop-types";
import ActorCard from "../../Card/ActorCard";
import { Scroller } from "../../../Assets/Styles/Scroller";

function TopBilledCast({ cast }) {
  const topBilledCast = get(cast);

  function get(cast) {
    return cast.slice(0, 9);
  }

  return (
    <div>
      <h2>Top Billed Cast</h2>
      <Scroller>
        {topBilledCast.map((actor) => {
          return (
            <ActorCard
              key={actor.name}
              name={actor.name}
              character={actor.character}
              img={actor.profile_path}
            />
          );
        })}
        <li>View more</li>
      </Scroller>
      <h3>Full Cast & Crew</h3>
    </div>
  );
}

TopBilledCast.propTypes = {
  cast: array,
};

export default TopBilledCast;
