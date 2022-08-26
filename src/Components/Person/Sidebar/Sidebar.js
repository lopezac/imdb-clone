import { object } from "prop-types";

import PosterCard from "../../Card/PosterCard";
import { SidebarDiv } from "../PersonDivs";
import PersonalInfo from "./PersonalInfo";

function Sidebar({ data }) {
  return (
    <SidebarDiv>
      <PosterCard url={data.profile_path} width="300" />
      <PersonalInfo data={data} />
    </SidebarDiv>
  );
}

Sidebar.propTypes = {
  data: object,
};

export default Sidebar;
