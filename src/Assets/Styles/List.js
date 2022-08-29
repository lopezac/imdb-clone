import styled from "styled-components";

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

export const WrapList = styled(List)`
  display: grid;
  row-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
`;

export const ListFlex = styled(List)`
  display: flex;
`;

export const RowDotList = styled(ListFlex)`
  column-gap: 10px;
  font-size: 0.9rem;
`;

export const WrapRowsList = styled(RowDotList)`
  flex-wrap: wrap;
  row-gap: 5px;
`;

export const Scroller = styled(ListFlex)`
  column-gap: 20px;
  overflow-x: scroll;
  overflow-y: hidden;
`;

export const ListColFlex = styled(ListFlex)`
  flex-direction: column;
`;

export const ListRowGap = styled(ListColFlex)`
  row-gap: 20px;
`;

export const MenuList = styled(ListColFlex)(
  ({ theme }) => `
    border-bottom: 1px solid ${theme.lighterGray};

    li {
      padding: 10px 20px;
    }

    li:hover {
      background-color: ${theme.darkBlue};
      color: white;
    }
  `
);

export const MainMenuList = styled.div`
  margin: 20px 0 10px 20px;
`;
