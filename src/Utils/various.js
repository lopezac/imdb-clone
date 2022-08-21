import { useLocation } from "react-router-dom";

import noImage from "../Assets/Images/no-image.png";

export function pushToObject(obj, property, elem) {
  obj[property] ? obj[property].push(elem) : (obj[property] = [elem]);
}

export function getImg(path) {
  if (!path) return noImage;
  return `https://image.tmdb.org/t/p/original${path}`;
}

export function useIsAMovie() {
  const path = useLocation().pathname;
  return path.includes("movie");
}

export function isAMovieOrTv(data) {
  return data.title ? "movie" : "tv";
}

export function getDate(credit) {
  return credit.release_date ? credit.release_date : credit.first_air_date;
}

export function getTitle(credit) {
  return credit.title ? credit.title : credit.name;
}
