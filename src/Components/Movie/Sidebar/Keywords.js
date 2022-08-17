import { array } from "prop-types";

function Keywords({ keywords }) {
  return (
    <div>
      <h3>Keywords</h3>
      <ul>
        {keywords.map((keyword) => {
          return <li key={keyword.name}>{keyword.name}</li>;
        })}
      </ul>
    </div>
  );
}

Keywords.propTypes = {
  data: array,
};

export default Keywords;
