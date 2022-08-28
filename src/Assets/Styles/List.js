import styled from "styled-components";

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

export const Scroller = styled(List)`
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;
  column-gap: 20px;
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
  row-gap: 20px;
`;

export const MainMenuList = styled.div`
  margin: 20px 0 10px 20px;
`;

export const RowDotList = styled(List)`
  display: flex;
  column-gap: 10px;
  font-size: 0.9rem;
`;

export const WrapRowsList = styled(RowDotList)`
  flex-wrap: wrap;
  row-gap: 5px;
`;
