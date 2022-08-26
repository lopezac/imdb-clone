import { string, array } from "prop-types";
import { SmallerSubTitle } from "../../Assets/Styles/Para";

import { Scroller } from "../../Assets/Styles/Scroller";
import { getDate, getTitle } from "../../Utils/various";
import MovieHomeCard from "../Card/MovieHomeCard";
import { ColumnHeader, HomeSection } from "./Home";

function Popular({ section, title, movies }) {
  if (!movies) return;
  return (
    <HomeSection>
      <ColumnHeader>
        <SmallerSubTitle>Popular {title}</SmallerSubTitle>
      </ColumnHeader>
      <Scroller>
        {movies.map((movie) => {
          return (
            <MovieHomeCard
              img={movie.poster_path}
              title={getTitle(movie)}
              date={getDate(movie)}
              section={section}
              id={movie.id}
              key={movie.id}
            />
          );
        })}
      </Scroller>
    </HomeSection>
  );
}

Popular.propTypes = {
  section: string,
  title: string,
  movies: array,
};

export default Popular;
