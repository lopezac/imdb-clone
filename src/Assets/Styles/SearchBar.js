import styled from "styled-components";

export const NavbarSearchBar = styled.div(
  ({ theme }) => `
    position: absolute;
    top: 65px;
    left: 0px;
    width: 100%;
    padding: 0 40px;
    background-color: white;
    border-bottom: 1px solid ${theme.lighterGray};

    svg {
      position: absolute;
      top: 15px;
      left: 0;
      color: black;
    }

    button {
      display: none;
    } 
  `
);

export const HomeSearchBar = styled.div(
  ({ theme }) => `

  margin-top: 38px;

  input, button {
    border-radius: 30px;
  }

  svg {
    display: none;
  }

  `
);
