import styled from "styled-components";

export const SearchDiv = styled.div`
  display: grid;
  grid-template-areas: "sidebar main";
  grid-template-columns: auto 1fr;
`;

export const SidebarDiv = styled.div`
  grid-area: sidebar;
`;
export const MainDiv = styled.div`
  grid-area: main;
`;
