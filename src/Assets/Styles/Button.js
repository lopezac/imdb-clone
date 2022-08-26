import styled from "styled-components";

const Btn = styled.button`
  font-weight: bold;
  font-size: 0.9rem;
  border: none;
`;

export const SearchBtn = styled(Btn)(
  ({ theme }) => `
    position: absolute;
    right: 0;
    top: 0px;
    padding: 13px 25px;
    color: white;
    background: linear-gradient(${theme.lightGreen}, ${theme.lightBlue});
  `
);

export const RoundedBtn = styled(Btn)(
  ({theme}) => `
    border-radius: 30px;
    background-color: ${theme.darkBlue};
    padding: 10px 15px;
    color: ${theme.lightGreen};
  `
);

export const BigBtn = styled(Btn)(
  ({theme}) => `
    background-color: white;
    color: ${theme.lightBlue};
    padding: 10px;
    border-radius: 5px;
    font-size: 1.1rem;
  `
);
