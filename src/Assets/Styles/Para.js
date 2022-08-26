import styled from "styled-components";

export const Para = styled.p`
  margin: 0;
`;

export const SmallerLightGray = styled(Para)(
  ({ theme }) => `
    color: ${theme.lightGray};
    font-weight: normal;
  `
);

export const SmallBlack = styled(Para)(
  ({ theme }) => `
    color: black;
    font-weight: bold;
    font-size: 0.9rem;
    margin: 5px 0;
  `
);

export const Title = styled.h1`
  margin: 0;
  font-size: 2.9rem;
  font-weight: 700;
`;

export const SubTitle = styled.h2`
  margin: 0;
  font-size: 1.8rem;
  line-height: 2.7rem;
`;

export const SmallerSubTitle = styled(SubTitle)`
  font-size: 1.5rem;
`;

export const MovieCardTitle = styled.h2`
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 0;
  line-height: 1.25rem;
`;

export const GrayPara = styled(Para)(
  ({ theme }) => `
    color: ${theme.darkGray};
    font-size: 0.9rem;
  `
);

export const ListTitle = styled.h3`
  font-weight: bolder;
  margin: 0;
  text-transform: uppercase;
  font-size: 1.1rem;
`;
