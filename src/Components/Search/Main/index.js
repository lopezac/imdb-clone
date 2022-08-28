import { array, string } from "prop-types";

import { getDate, getTitle } from "../../../Utils/various";
import MovieSearchCard from "../../Card/MovieSearchCard";
import PersonSearchCard from "../../Card/PersonSearchCard";
import { MainDiv } from "../SearchDivs";
import { List } from "../../../Assets/Styles/List";

function SearchPage({ data, section }) {
  if (!data) return;
  return (
    <MainDiv>
      <List>
        {data.map((item) => {
          return item.gender ? (
            <PersonSearchCard
              id={item.id}
              title={item.name}
              img={item.profile_path}
              key={item.id}
              mainRoles={item.known_for}
              department={item.known_for_department}
            />
          ) : (
            <MovieSearchCard
              id={item.id}
              date={getDate(item)}
              title={getTitle(item)}
              overview={item.overview}
              section={section}
              img={item.poster_path}
              key={item.id}
            />
          );
        })}
      </List>
    </MainDiv>
  );
}

SearchPage.propTypes = {
  data: array,
  section: string,
};

export default SearchPage;
