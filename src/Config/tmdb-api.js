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