import { object } from "prop-types";

import { getLanguage } from "../../../Utils/format";
import { getImg } from "../../../Utils/various";

function SidebarFacts({ data }) {
  return (
    <div>
      <p>
        <strong>Status</strong> {data.status}
      </p>
      <p>
        <strong>Type</strong> {data.type}
      </p>
      <p>
        {data.networks.map((network) => {
          return (
            <img
              src={getImg(network.logo_path)}
              alt={network.name}
              width="100"
            />
          );
        })}
      </p>
      <p>
        <strong>Original language</strong> {getLanguage(data.original_language)}
      </p>
    </div>
  );
}

SidebarFacts.propTypes = {
  data: object,
};

export default SidebarFacts;
