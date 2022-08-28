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

export const SmallBlack = styled(Para)`
  color: black;
  font-weight: bold;
  font-size: 0.9rem;
  margin: 5px 0;
`;

export const SmallPara = styled(Para)`
  font-size: 0.8rem;
`;

export const SmallerPara = styled(Para)`
  font-size: 0.9rem;
  line-height: 1.35rem;
`;

export const MediumPara = styled(Para)`
  font-size: 0.98rem;
`;

export const SmallWhitePara = styled(Para)`
  color: white;
  font-weight: 100;
  font-size: 0.85rem;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 2.9rem;
  font-weight: 700;
`;

export const SmallTitle = styled(Title)`
  font-size: 2rem;
`;

export const SubTitle = styled.h2`
  margin: 0;
  font-size: 1.8rem;
  line-height: 2.7rem;
`;

export const MovieTitle = styled(SubTitle)`
  font-size: 2rem;
`;

export const SmallerSubTitle = styled(SubTitle)`
  font-size: 1.5rem;
`;

export const WhiteSubTitle = styled(SmallerSubTitle)`
  color: white;
`;

export const SmallestSubTitle = styled(SubTitle)`
  font-size: 1.4rem;
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

export const GrayThinSpan = styled.span`
  font-weight: 100;
  color: rgba(255, 255, 255, 0.6);
`;

export const GrayItalicPara = styled(Para)`
  font-weight: 100;
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
  margin-top: 25px;
`;

export const ListTitle = styled.h3`
  font-weight: bolder;
  margin: 0;
  text-transform: uppercase;
  font-size: 1.1rem;
`;

export const StrongPara = styled(Para)`
  font-weight: 700;
`;

export const StrongMediumPara = styled(StrongPara)`
  font-size: 1rem;
`;

export const StrongSmallPara = styled(StrongPara)`
  font-size: 0.96rem;
`;
