import { object } from "prop-types";

import { formatMoney, getLanguage } from "../../../Utils/format";
import { SmallBlack, MediumPara } from "../../../Assets/Styles/Para";

function SidebarFacts({ data }) {
  return (
    <div>
      <MediumPara>
        <SmallBlack>Status</SmallBlack> {data.status}
      </MediumPara>
      <MediumPara>
        <SmallBlack>Original language</SmallBlack>{" "}
        {getLanguage(data.original_language)}
      </MediumPara>
      <MediumPara>
        <SmallBlack>Budget</SmallBlack> ${formatMoney(data.budget)}
      </MediumPara>
      <MediumPara>
        <SmallBlack>Revenue</SmallBlack> ${formatMoney(data.revenue)}
      </MediumPara>
    </div>
  );
}

SidebarFacts.propTypes = {
  data: object,
};

export default SidebarFacts;
