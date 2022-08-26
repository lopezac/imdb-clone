import styled from "styled-components";

export const SearchInput = styled.input(
  ({ theme }) => `
    width: 100%;
    border: none;
    outline: none;
    padding: 10px 5px 12px 20px;
    font-size: 1.1rem;

    font-style: italic;
    color: ${theme.mediumGray};

    :placeholder-shown {
      font-style: italic;
      color: ${theme.lightGray};
    }
  `
);

export const SearchForm = styled.form`
  position: relative;
`;
