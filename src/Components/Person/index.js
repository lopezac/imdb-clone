import { object } from "prop-types";

import { PersonDiv } from "../../Assets/Styles/PersonDivs";
import Main from "./Main/Main";
import Sidebar from "./Sidebar/Sidebar";

function PersonPage({ data }) {
  console.log("person data at person page", data);

  return (
    <PersonDiv>
      <Sidebar />
      <Main data={data} />
    </PersonDiv>
  );
}

PersonPage.propTypes = {
  data: object,
};

export default PersonPage;
