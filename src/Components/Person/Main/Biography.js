import { string } from "prop-types";

import { SmallestSubTitle, SmallerPara } from "../../../Assets/Styles/Para";

function Biography({ biography }) {
  return (
    <div>
      <SmallestSubTitle>Biography</SmallestSubTitle>
      <SmallerPara>{biography}</SmallerPara>
    </div>
  );
}

Biography.propTypes = {
  biography: string,
};

export default Biography;
