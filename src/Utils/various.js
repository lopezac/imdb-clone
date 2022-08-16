export function pushToObject(obj, property, elem) {
  obj[property] ? obj[property].push(elem) : (obj[property] = [elem]);
}

export function getImg(path) {
  return `https://image.tmdb.org/t/p/original${path}`;
}
