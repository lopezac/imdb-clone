import styled from "styled-components";

export const DropdownMenu = styled.div(
  ({ theme }) => `
    background-color: ${theme.white};
    color: ${theme.darkGray};
    font-size: 0.8rem;
    width: 180px;
    position: absolute;
    border: 1px solid ${theme.lighterGray};
    border-radius: 4px;
    `
);

export const RightDropdownMenu = styled(DropdownMenu)`
  right: 10px;
`;
