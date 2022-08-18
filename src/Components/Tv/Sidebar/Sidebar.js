import { object } from "prop-types";

import { SidebarDiv } from "../../../Assets/Styles/MovieDivs";
import SidebarFacts from "./SidebarFacts";
import SocialMedia from "../../Movie/Sidebar/SocialMedia";
import Keywords from "../../Movie/Sidebar/Keywords";

function Sidebar({ data }) {
  return (
    <SidebarDiv>
      <SocialMedia ids={data.external_ids} homepage={data.homepage} />
      <SidebarFacts data={data} />
      <Keywords keywords={data.keywords.results} />
    </SidebarDiv>
  );
}

Sidebar.propTypes = {
  data: object,
};

export default Sidebar;
