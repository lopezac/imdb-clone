import styled from "styled-components";

export const PersonCard = styled.li(
  ({ theme }) => `
    border: 1px solid ${theme.stone};
    border-radius: 10px;
    box-shadow: 3px 3px 8px ${theme.stone};
    padding-bottom: 10px;
    
    p {
      padding: 0 8px;
    }
`
);

export const SmallRectangleCard = styled.li`
  width: 250px;
  border-radius: 10px;

  p {
    padding-bottom: 0px;
  }
`;

export const LiCardText = styled.li`
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid ${(props) => props.theme.lightStone};
  border-radius: 5px;
  padding: 5px;
`;

export const CenterCard = styled.li`
  text-align: center;
`;

export const LiBorderStone = styled.li`
  border: 1px solid ${(props) => props.theme.lightStone};
`;

export const LiFlexRow = styled.li`
  display: flex;
  column-gap: 20px;
`;

export const LiBorderInfo = styled(LiBorderStone)`
  border-top: none;
  padding: 20px 15px;
  font-size: 0.95rem;

  :first-child {
    border-top: 1px solid ${(props) => props.theme.lightStone};
  }

  svg {
    margin: 0 20px;
  }
`;

export const BorderedLi = styled(LiBorderStone)`
  border-top: none;
  :last-child {
    border-bottom: none;
  }
`;
