import styled from "styled-components";

export const MovieDiv = styled.div`
  display: grid;
  grid-template-areas:
    "hero hero"
    "main sidebar";
  grid-template-columns: 1fr auto;
  grid-template-rows: auto 1fr;
`;

export const HeroDiv = styled.div`
  grid-area: hero;
`;

export const MainDiv = styled.div`
  grid-area: main;
`;

export const SidebarDiv = styled.div`
  grid-area: sidebar;
`;
