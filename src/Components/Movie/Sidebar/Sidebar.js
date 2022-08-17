import { object } from "prop-types";

import SidebarFacts from "./SidebarFacts";
import Keywords from "./Keywords";
import SocialMedia from "./SocialMedia";
import { SidebarDiv } from "../../../Assets/Styles/MovieDivs";

function Sidebar({ data }) {
  return (
    <SidebarDiv>
      <SocialMedia ids={data.external_ids} homepage={data.homepage} />
      <SidebarFacts data={data} />
      <Keywords keywords={data.keywords.keywords} />
    </SidebarDiv>
  );
}

Sidebar.propTypes = {
  data: object,
};

export default Sidebar;
