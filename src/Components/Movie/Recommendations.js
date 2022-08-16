import { array } from "prop-types";

function Recommendations({data}) {
  console.log("data at recommendations", data)
  if (!data) return;
  return (
    <div>
      <h2>Recommendations</h2>
      <ul>
        {data.map()}
      </ul>
    </div>
  );
}

Recommendations.propTypes = {
  data: array
}

export default Recommendations;
