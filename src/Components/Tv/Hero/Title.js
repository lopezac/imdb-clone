import { number, string } from "prop-types";

import { getYear } from "../../../Utils/format";

function Title({ title, airDate }) {
  return (
    <h1>
      {title} <span>({getYear(airDate)})</span>
    </h1>
  );
}

Title.propTypes = {
  title: string,
  airDate: number,
};

export default Title;
