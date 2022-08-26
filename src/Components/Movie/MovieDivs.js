import styled from "styled-components";

export const MovieDiv = styled.div`
  display: grid;
  grid-template-areas:
    "hero hero"
    "main sidebar";
  grid-template-columns: 1fr auto;
  grid-template-rows: auto 1fr;
  width: 100vw;
`;

export const HeroDiv = styled.div`
  grid-area: hero;
  display: flex;
  padding: 20px;
`;

export const MainDiv = styled.div`
  grid-area: main;
`;

export const SidebarDiv = styled.div`
  grid-area: sidebar;
`;

export const HeroInfoDiv = styled.div`
  // disp
`;
