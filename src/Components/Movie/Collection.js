import {object} from "prop-types";

import {getImg} from "../../Utils/various";

function Collection({data}) {
  return (
    <div>
      <img src={getImg(data.backdrop_path)} alt={data.name} width="500" height="250" />
      <h2>Part of the {data.name}</h2>
      <button>View the collection</button>
    </div>
  )
}

Collection.propTypes = {
  data: object
};

export default Collection;
