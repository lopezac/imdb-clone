import { format, formatDuration } from "date-fns";

export function getYear(dateStr) {
  const date = dateStr.split("-");
  return format(new Date(date[0], date[1], date[2]), "y");
}

export function formatDate(dateStr) {
  const date = dateStr.split("-");
  return format(new Date(date[0], date[1] - 1, date[2]), "dd/M/yyyy");
}

export function formatArray(array) {
  return array.map((inner) => inner.name).join(", ");
}

export function joinUpperCase(array) {
  return array.map((word) => capitalize(word)).join(", ");
}

export function formatMinutes(duration) {
  let hours = Math.floor(duration / 60);
  let minutes = duration % 60;
  return `${hours}h ${minutes}m`;
}

export function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}
