import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  column-gap: 25px;
`;

export const SmallNav = styled(Navbar)``;

export const SpaceBetweenNav = styled(Navbar)(
  ({ theme }) => `
    justify-content: space-between;
    padding: 9px 30px;
    background-color: ${theme.darkBlue};
    color: white;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    list-style-type: none;
  `
);
