import styled from "styled-components";

const Para = styled.p`
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
    color: ${theme.black};
    font-weight: bold;
    font-size: 0.9rem;
    margin: 5px 0;
  `
);
