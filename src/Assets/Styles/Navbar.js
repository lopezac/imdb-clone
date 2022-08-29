import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  column-gap: 25px;
  cursor: pointer;
  list-style-type: none;
`;

export const SmallNav = styled(Navbar)`
  justify-content: center;
  column-gap: 40px;
  padding: 11px 0;
  border-bottom: 1px solid ${(props) => props.theme.lighterGray};
  position: relative;

  span {
    display: none;
  }

  p:hover ~ span {
    display: block;
    position: absolute;
    left: 0;
    bottom: -20px;
  }
`;

export const SpaceBetweenNav = styled(Navbar)(
  ({ theme }) => `
    justify-content: space-between;
    padding: 9px 30px;
    background-color: ${theme.darkBlue};
    color: white;
    font-weight: 600;
    font-size: 0.9rem;
  `
);
