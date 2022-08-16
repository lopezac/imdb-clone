import { string, number } from "prop-types";
import styled from "styled-components";

import { getImg } from "../../Utils/various";

const Card = styled.div`
  display: flex;
  border: 1px solid black;
`;

const Top = styled(Card)`
  flex-direction: column;
`;

function ReviewCard({ title, userName, content, rating, date, img }) {
  return (
    <Card>
      <Top>
        <img src={getImg(img)} width="75" alt={userName} />

        <div>
          <p>
            {title} {rating}
          </p>
          <p>
            Written by {userName} on {date}
          </p>
        </div>
      </Top>

      <p>{content}</p>
    </Card>
  );
}

ReviewCard.propTypes = {
  title: string,
  userName: string,
  content: string,
  rating: number,
  date: string,
  img: string,
};

export default ReviewCard;
