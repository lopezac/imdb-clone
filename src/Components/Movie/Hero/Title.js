import { number, string } from "prop-types";

import { getYear } from "../../../Utils/format";

function Title({ title, release_date }) {
  return (
    <h1>
      {title} <span>({getYear(release_date)})</span>
    </h1>
  );
}

Title.propTypes = {
  title: string,
  release_date: number,
};

export default Title;
