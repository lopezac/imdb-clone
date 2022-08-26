import styled from "styled-components";

export const HeroDiv = styled.div(
  ({ theme }) => `
  }
    background-image: url("https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/kf456ZqeC45XTvo6W9pW5clYKfQ.jpg");
    background-size: cover;
    background-position: 50% 50%; 
    height: 300px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    `
);

export const HeroWrapper = styled.div`
  width: 100%;
  padding: 40px 50px;
`;

export const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ColumnHeader = styled.header`
  padding-left: 38px;
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const HomeSection = styled.div`
  padding-top: 30px;
`;
