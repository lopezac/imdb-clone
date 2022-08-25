import styled from "styled-components";

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const MenuList = styled(List)(
  ({ theme }) => `
    border-bottom: 1px solid ${theme.lighterGray};
    display: flex;
    flex-direction: column;

    li {
      padding: 10px 20px;
    }

    li:hover {
      background-color: ${theme.darkBlue};
      color: ${theme.white};
    }
  `
);

export const MainMenuList = styled.div`
  margin: 20px 0 10px 20px;
`;
