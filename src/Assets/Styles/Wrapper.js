import styled from "styled-components";

const FlexDiv = styled.div`
  display: flex;
`;

export const FlexedWrapper = styled(FlexDiv)`
  align-items: center;
`;

export const RowWrapper = styled(FlexedWrapper)`
  column-gap: 30px;
`;

export const PadRowWrapper = styled(FlexDiv)`
  column-gap: 20px;
  padding: 20px 40px 20px 20px;
`;

export const TopPadRowWrapper = styled(FlexDiv)`
  column-gap: 30px;
  padding: 60px 20px 20px 20px;
`;

export const BorderRowWrapper = styled(RowWrapper)`
  border: 1px solid ${(props) => props.theme.lightStone};
`;

export const CenteredWrapper = styled(FlexedWrapper)`
  justify-content: center;
  padding: 30px;
`;

export const FlexColumnDiv = styled(FlexDiv)`
  flex-direction: column;
  row-gap: 20px;
`;
