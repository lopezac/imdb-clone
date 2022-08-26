import styled from "styled-components";

export const FooterDiv = styled.div(
  ({theme}) => `
    background-color: ${theme.darkBlue};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80px 0 60px 0;
  `
);

export const JoinColumn = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: -30px;
  right: 0;
  row-gap: 40px;
`;

export const NavWrapper = styled.nav`
  column-gap: 40px;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const ListDiv = styled.div`
  line-height: 1.5rem;
`;

export const FooterLogo = styled.img`
  // position: absolute;
  // left: 0;
  // top: 0;
  // display: block;
`;
