import styled from "styled-components";

export const PersonDiv = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: "sidebar main";
`;

export const SidebarDiv = styled.div`
  grid-area: sidebar;
`;

export const MainDiv = styled.div`
  grid-area: main;
`;
