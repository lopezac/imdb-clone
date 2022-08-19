import { object } from "prop-types";

import { getAge } from "../../../Utils/format";

function PersonalInfo({ data }) {
  function getGender(gender) {
    return gender === 2 ? "Male" : "Female";
  }

  function getBirthdayAndAge(birthday, deathday) {
    if (deathday) {
      return `${birthday}`;
    } else {
      return `${birthday} (${getAge(birthday)} years old)`;
    }
  }

  return (
    <div>
      <h2>Personal Info</h2>
      <p>
        <strong>Known For</strong> {data.known_for_department}
      </p>
      <p>
        <strong>Known Credits</strong> {data.combined_credits.cast.length - 1}
      </p>
      <p>
        <strong>Gender</strong> {getGender(data.gender)}
      </p>
      <p>
        <strong>Birthday</strong>{" "}
        {getBirthdayAndAge(data.birthday, data.deathday)}
      </p>
      {data.deathday && (
        <p>
          <strong>Deathday</strong> {getBirthdayAndAge(data.birthday)}
        </p>
      )}
      <p>
        <strong>Place of Birth</strong> {data.place_of_birth}
      </p>
    </div>
  );
}

PersonalInfo.propTypes = {
  data: object,
};

export default PersonalInfo;
