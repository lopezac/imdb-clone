import { array, func } from "prop-types";
import { SidebarDiv } from "../SearchDivs";

function SettingsPanel({ data, updateSection }) {
  const options = [
    { name: "movie", value: "Movies" },
    { name: "tv", value: "TV Shows" },
    { name: "person", value: "People" },
  ];

  return (
    <SidebarDiv>
      <h2>Search Results</h2>
      <ul>
        {options.map((option) => {
          return (
            <li
              onClick={updateSection.bind(this, option.name)}
              key={option.name}
            >
              {option.value}
            </li>
          );
        })}
      </ul>
    </SidebarDiv>
  );
}

SettingsPanel.propTypes = {
  data: array,
  updateSection: func,
};

export default SettingsPanel;
