import { array, func } from "prop-types";

import { SidebarDiv } from "../SearchDivs";
import { WhiteSubHeading } from "../../../Assets/Styles/Para";
import { MenuList } from "../../../Assets/Styles/List";
import { BorderedLi } from "../../../Assets/Styles/Card";

function SettingsPanel({ data, updateSection }) {
  const options = [
    { name: "movie", value: "Movies" },
    { name: "tv", value: "TV Shows" },
    { name: "person", value: "People" },
  ];

  return (
    <SidebarDiv>
      <WhiteSubHeading>Search Results</WhiteSubHeading>
      <MenuList>
        {options.map((option) => {
          return (
            <BorderedLi
              onClick={updateSection.bind(this, option.name)}
              key={option.name}
            >
              {option.value}
            </BorderedLi>
          );
        })}
      </MenuList>
    </SidebarDiv>
  );
}

SettingsPanel.propTypes = {
  data: array,
  updateSection: func,
};

export default SettingsPanel;
