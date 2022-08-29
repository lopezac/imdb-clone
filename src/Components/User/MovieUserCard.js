import { string, number, object } from "prop-types";
import { useContext } from "react";
import { useParams } from "react-router-dom";

import MovieBtns from "./MovieBtns";
import { FirebaseContext } from "../../Config/firebase-context";
import { getImg } from "../../Utils/various";
import { StyledLink } from "../../Assets/Styles/Link";
import { LiFlexRow } from "../../Assets/Styles/Card";
import { BorderCenterDiv } from "../../Assets/Styles/Wrapper";
import { UserMovieImg } from "../../Assets/Styles/Image";
import TitleDate from "../Reusable/TitleDate";

function MovieUserCard({
  title,
  date,
  overview,
  img,
  id,
  mediaType,
  userData,
}) {
  const firebase = useContext(FirebaseContext);
  const currentUserId = useParams().userId;

  if (!userData) return;
  console.log("userData, ", userData);
  return (
    <LiFlexRow>
      <StyledLink to={`/${mediaType}/${id}`}>
        <UserMovieImg src={getImg(img)} alt={title} width="125" />
      </StyledLink>
      <BorderCenterDiv>
        <TitleDate
          id={id}
          section={mediaType}
          overview={overview}
          title={title}
          date={date}
        />
        {currentUserId === firebase.getUserId() && (
          <MovieBtns id={id} mediaType={mediaType} ratings={userData.ratings} />
        )}
      </BorderCenterDiv>
    </LiFlexRow>
  );
}

MovieUserCard.propTypes = {
  title: string,
  date: string,
  overview: string,
  img: string,
  id: number,
  mediaType: string,
  userData: object,
};

export default MovieUserCard;
