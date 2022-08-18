import { string } from "prop-types";

function Biography({ biography }) {
  return (
    <div>
      <h2>Biography</h2>
      <p>{biography}</p>
    </div>
  );
}

Biography.propTypes = {
  biography: string,
};

export default Biography;
