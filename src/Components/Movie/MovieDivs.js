import styled from "styled-components";

export const MovieDiv = styled.div`
  display: grid;
  grid-template-areas:
    "hero"
    "main";
  grid-template-rows: auto 1fr;
`;

export const HeroDiv = styled.div`
  grid-area: hero;
  display: flex;
  padding: 30px 40px;
  width: 100vw;
  background: linear-gradient(
      ${(props) => (props.color ? props.color[1] : "#151210")}CC,
      ${(props) => (props.color ? props.color[1] : "#151210")}CC
    ),
    url(${(props) => props.img});
  background-position: 50% 50%;
  background-size: cover;
  color: white;
  column-gap: 40px;
`;

export const MainContentWrapper = styled.div`
  width: 100vw;
  grid-area: main;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-areas: "mainContent sidebar";
  padding: 30px 40px;
  column-gap: 30px;
`;

export const MainDiv = styled.div(
  ({ theme }) => `
    max-width: 100vw;
    grid-area: mainContent;
    overflow: hidden;
  `
);

export const SidebarDiv = styled.div`
  grid-area: sidebar;
`;

export const SectionDiv = styled.div(
  ({ theme }) => `
    border-bottom: 10px solid ${theme.lightStone};
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    padding: 30px 0;

    :last-child {
      border-bottom: none;
    }
  `
);

export const HeroInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CollectionDiv = styled(SectionDiv)`
  align-items: center;
  justify-content: center;
  row-gap: 20px;
  background: linear-gradient(
      ${(props) => props.theme.darkBlue}CC,
      ${(props) => props.theme.darkBlue}99
    ),
    url(${(props) => props.img});
  background-size: cover;
  background-position: 80% 20%;
  color: white;
  height: 258px;
  width: 100%;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  column-gap: 20px;
  margin-top: 35px;
`;
