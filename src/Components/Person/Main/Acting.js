import CreditCard from "../../Card/CreditCard";

function Acting({ credits }) {
  console.log("credits", credits);

  function getDate(credit) {
    return credit.release_date ? credit.release_date : credit.first_air_date;
  }

  function getEpisodeCount(credit) {
    return credit.media_type === "tv" ? credit.episode_count : 0;
  }

  function sortByYear(array) {
    return array.sort((a, b) => (getDate(a) > getDate(b) ? -1 : 1));
  }

  function getTitle(credit) {
    return credit.media_type === "tv" ? credit.name : credit.title;
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
            />
          );
        })}
      </ol>
      {getDepartments(credits.crew).map((department) => {
        return (
          <div>
            <h2>{department}</h2>
            <ol>
              {sortByYear(credits.crew).map((credit) => {
                return <li></li>;
              })}
            </ol>
          </div>
        );
      })}
    </div>
  );
}

export default Acting;
