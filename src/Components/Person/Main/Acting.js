import { getDate, getTitle } from "../../../Utils/various";
import CreditCard from "../../Card/CreditCard";
import { SmallestSubTitle } from "../../../Assets/Styles/Para";
import { List } from "../../../Assets/Styles/List";

function Acting({ credits }) {
  console.log("credits", credits);

  function getEpisodeCount(credit) {
    return credit.media_type === "tv" ? credit.episode_count : 0;
  }

  function sortByYear(array) {
    return array.sort((a, b) => (getDate(a) > getDate(b) ? -1 : 1));
  }

  function getDepartments(credits) {
    const departments = credits.map((credit) => credit.department);
    return [...new Set(departments)];
  }

  return (
    <div>
      <SmallestSubTitle>Acting</SmallestSubTitle>
      <List>
        {sortByYear(credits.cast).map((credit) => {
          return (
            <CreditCard
              key={credit.credit_id}
              character={credit.character}
              title={getTitle(credit)}
              date={getDate(credit)}
              episodes={getEpisodeCount(credit)}
              id={credit.id}
            />
          );
        })}
      </List>
      {getDepartments(credits.crew).map((department) => {
        return (
          <div key={department}>
            <SmallestSubTitle>{department}</SmallestSubTitle>
            <List>
              {sortByYear(credits.crew).map((credit) => {
                return (
                  credit.department === department && (
                    <CreditCard
                      key={credit.credit_id}
                      character={credit.job}
                      title={getTitle(credit)}
                      date={getDate(credit)}
                      episodes={getEpisodeCount(credit)}
                      id={credit.id}
                    />
                  )
                );
              })}
            </List>
          </div>
        );
      })}
    </div>
  );
}

export default Acting;
