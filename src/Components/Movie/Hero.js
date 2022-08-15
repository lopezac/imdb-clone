import { getYear, formatDate, formatArray, formatMinutes } from "../../Utils/format";

function Hero({ data }) {

  if (!data) return;
  console.log("data at hero", data);
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`} alt={data.title}/>
      <div>
        <h1>{data.title} <span>({getYear(data.release_date)})</span></h1>
        <div>
          <p>{formatDate(data.release_date)}</p>
          <p>{formatArray(data.genres)}</p>
          <p>{formatMinutes(data.runtime)}</p>
        </div>
        <div>
          <button>Add to favorites</button>
          <button>Add to watchlist</button>
          <button>Rate</button>
          <button>>Play trailer</button>
        </div>
        <p>{data.tagline}</p>
        <div>
          <h3>Overview</h3>
          <p>{data.overview}</p>
        </div>
        <CreatorsList data={data.credits} />
      </div>
    </div>
  );
}

export default Hero;
