import { object } from "prop-types";

import { SidebarDiv } from "../../../Assets/Styles/PersonDivs";

function Sidebar({ data }) {
  return <SidebarDiv>Sidebar</SidebarDiv>;
}

Sidebar.propTypes = {
  data: object,
};

export default Sidebar;
