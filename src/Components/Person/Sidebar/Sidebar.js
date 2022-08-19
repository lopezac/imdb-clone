import { object } from "prop-types";

import { SidebarDiv } from "../../../Assets/Styles/PersonDivs";
import PosterCard from "../../Card/PosterCard";
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
