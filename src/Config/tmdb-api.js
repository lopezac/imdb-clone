const TMDB_API = "56247e9d0dfdfb574da47583abd13229"; // process.env.REACT_APP_TMDB_API_KEY;

export async function getMovieData(id) {
  // (/watch/providers), critique external page
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API}&append_to_response=images,videos,credits,keywords,recommendations,external_ids`
  );
  const result = await response.json();
  return result;
}

export async function getTvData(id) {
  // (/watch/providers), critique external page
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${TMDB_API}&append_to_response=images,videos,aggregate_credits,keywords,recommendations,external_ids`
  );
  const result = await response.json();
  return result;
}

export async function getCollectionData(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/collection/${id}?api_key=${TMDB_API}`
  );
  const result = await response.json();
  return result;
}

export async function getPersonData(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${TMDB_API}&append_to_response=movie_credits,combined_credits`
  );
  const result = await response.json();
  return result;
}

export async function getSearch(query, page = "1", section = "movie") {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/${section}?api_key=${TMDB_API}&query=${query}&page=${page}&include_adult=true`
  );
  const result = await response.json();
  return result;
}

export async function getPopular(section = "movie") {
  const response = await fetch(
    `https://api.themoviedb.org/3/${section}/popular?api_key=${TMDB_API}`
  );
  const result = await response.json();
  return result;
}

export async function getTrending(time = "day") {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/${time}?api_key=${TMDB_API}`
  );
  const result = await response.json();
  return result;
}
