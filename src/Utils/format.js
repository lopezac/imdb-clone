import { format } from "date-fns";

export function getYear(dateStr) {
  if (!dateStr) return "";
  const date = dateStr.split("-");
  return format(new Date(date[0], date[1], date[2]), "y");
}

export function getMonthAndYear(date) {
  return format(new Date(date), "MMMM y");
}

export function getAge(date) {
  return new Date().getFullYear() - getYear(date);
}

export function formatDate(dateStr) {
  if (!dateStr) return "";
  const date = dateStr.split("-");
  return format(new Date(date[0], date[1] - 1, date[2]), "dd/M/yyyy");
}

export function formatDateShort(dateString) {
  if (!dateString) return "";
  const date = dateString.split("-");
  return format(new Date(date[0], date[1] - 1, date[2]), "MMM dd, y");
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

export function getLanguage(code) {
  // transforms code "en" to "English"
  const languagesNames = new Intl.DisplayNames(["en"], { type: "language" });
  return languagesNames.of(code);
}

export function formatMoney(num) {
  return num.toLocaleString("en-US");
}
