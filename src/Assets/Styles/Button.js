import styled from "styled-components";

export const SearchBtn = styled.button(
  ({ theme }) => `
    position: absolute;
    right: 0;
    top: 0px;
    border: none;
    padding: 12px 25px;
    color: white;
    background: linear-gradient(${theme.lightGreen}, ${theme.lightBlue});
    font-weight: bold;
    font-size: 1rem;
  `
);
