import { object } from "prop-types";

import { formatMoney, getLanguage } from "../../../Utils/format";

function SidebarFacts({ data }) {
  return (
    <div>
      <p>
        <strong>Status</strong> {data.status}
      </p>
      <p>
        <strong>Original language</strong> {getLanguage(data.original_language)}
      </p>
      <p>
        <strong>Budget</strong> ${formatMoney(data.budget)}
      </p>
      <p>
        <strong>Revenue</strong> ${formatMoney(data.revenue)}
      </p>
    </div>
  );
}

SidebarFacts.propTypes = {
  data: object,
};

export default SidebarFacts;
