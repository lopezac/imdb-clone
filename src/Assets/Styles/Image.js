import styled from "styled-components";

export const MovieImg = styled.img`
  border-radius: 10px;
`;

export const PosterImg = styled.img`
  width: 300px;
  height: 450px;
  border-radius: 8px;
`;

export const PersonImg = styled.img`
  width: 138px;
  height: 175px;
  border-radius: 10px 10px 0 0;
`;

export const RoundLeft = styled.img`
  border-radius: 10px 0 0 10px;
`;

export const SeasonImg = styled.img`
  width: 130px;
  height: 195px;
`;

export const RecommendImg = styled(RoundLeft)`
  width: 433px;
  height: 300px;
`;

export const SmallRectangleImg = styled(MovieImg)`
  width: 250px;
  height: 150px;
`;
