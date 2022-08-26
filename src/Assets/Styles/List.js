import styled from "styled-components";

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
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
      color: white;
    }
  `
);

export const WrapList = styled(List)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const MainMenuList = styled.div`
  margin: 20px 0 10px 20px;
`;
