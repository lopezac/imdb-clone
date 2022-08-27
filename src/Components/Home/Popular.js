import { string, array } from "prop-types";

import { Scroller } from "../../Assets/Styles/List";
import { SmallerSubTitle } from "../../Assets/Styles/Para";
import MovieHomeCard from "../Card/MovieHomeCard";
import { ColumnHeader, HomeSection } from "./Home";
import { getDate, getTitle } from "../../Utils/various";

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
