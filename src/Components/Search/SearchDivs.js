import styled from "styled-components";

import { TopPadRowWrapper } from "../../Assets/Styles/Wrapper";

export const SearchDiv = styled(TopPadRowWrapper)`
  display: grid;
  grid-template-areas: "sidebar main";
  grid-template-columns: auto 1fr;
`;

export const SidebarDiv = styled.div`
  grid-area: sidebar;
  width: 258px;
  border-radius: 10px;
`;
export const MainDiv = styled.div`
  grid-area: main;
`;
