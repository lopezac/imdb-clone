import { string } from "prop-types";

import { GrayItalicPara } from "../../../Assets/Styles/Para";

function Overview({ tagline, overview }) {
  return (
    <>
      <GrayItalicPara>{tagline}</GrayItalicPara>
      <div>
        <h3>Overview</h3>
        <p>{overview}</p>
      </div>
    </>
  );
}

Overview.propTypes = {
  tagline: string,
  overview: string,
};

export default Overview;
