import { getDate, getTitle } from "../../../Utils/various";
import CreditCard from "../../Card/CreditCard";

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
      <h2>Acting</h2>
      <ol>
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
      </ol>
      {getDepartments(credits.crew).map((department) => {
        return (
          <div key={department}>
            <h2>{department}</h2>
            <ol>
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
            </ol>
          </div>
        );
      })}
    </div>
  );
}

export default Acting;
