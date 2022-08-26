import { object } from "prop-types";

import Main from "./Main/Main";
import { PersonDiv } from "./PersonDivs";
import Sidebar from "./Sidebar/Sidebar";

function PersonPage({ data }) {
  console.log("person data at person page", data);

  if (!data) return;
  return (
    <PersonDiv>
      <Sidebar data={data} />
      <Main data={data} />
    </PersonDiv>
  );
}

PersonPage.propTypes = {
  data: object,
};

export default PersonPage;
