import styled from "styled-components";

export const NavbarSearchBar = styled.div(
  ({ theme }) => `
    position: absolute;
    top: 71px;
    left: 0px;
    width: 100%;
    padding: 0 40px;
    background-color: white;

    input {
      width: 100%;
      border: none;
      outline: none;
      padding: 15px 5px;
      font-size: 1.1rem;
      color: ${theme.lightGray};
    }

    input:placeholder-shown {
      font-style: italic;
      color: ${theme.lighterGray};
    }

    button {
      display: none;
    } 
  `
);
