import styled from "styled-components";

import { PadRowWrapper, FlexColumnDiv } from "../../Assets/Styles/Wrapper";

export const PersonDiv = styled(PadRowWrapper)`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: "sidebar main";
  width: 100vw;
  overflow: hidden;
`;

export const SidebarDiv = styled.div`
  grid-area: sidebar;
`;

export const MainDiv = styled(FlexColumnDiv)`
  grid-area: main;
  overflow: hidden;
`;
