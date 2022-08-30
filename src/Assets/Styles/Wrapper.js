import styled from "styled-components";

const FlexDiv = styled.div`
  display: flex;
`;

export const SmallGapDiv = styled(FlexDiv)`
  column-gap: 20px;
`;

export const GapBaselineDiv = styled(SmallGapDiv)`
  align-items: baseline;
`;

export const CenterRowDiv = styled(SmallGapDiv)`
  align-items: center;
  p {
    cursor: pointer;
  }
`;

export const PadRowWrapper = styled(SmallGapDiv)`
  padding: 20px 40px 20px 20px;
`;

export const GapPadDiv = styled(FlexDiv)`
  column-gap: 40px;
  padding: 40px;
`;

export const GapPadBackground = styled(GapPadDiv)`
  background: radial-gradient(
    at 30% top,
    ${(props) => props.theme.darkGreen},
    ${(props) => props.theme.darkBlue}
  );
  align-items: center;
`;

export const ColumnFlex = styled(FlexDiv)`
  flex-direction: column;
`;

export const CenterNoBorderDiv = styled(ColumnFlex)`
  justify-content: center;
  padding-left: 20px;
`;

export const PadColumnFlex = styled(ColumnFlex)`
  padding: 20px 40px;
`;

export const FlexedWrapper = styled(FlexDiv)`
  align-items: center;
`;

export const TopPadRowWrapper = styled(FlexDiv)`
  column-gap: 30px;
  padding: 66px 40px 30px 40px;
`;

export const FlexColumnDiv = styled(ColumnFlex)`
  row-gap: 20px;
`;

export const CenterColumnDiv = styled(FlexColumnDiv)`
  justify-content: center;
`;

export const RowWrapper = styled(FlexedWrapper)`
  column-gap: 30px;
`;

export const CenteredWrapper = styled(FlexedWrapper)`
  justify-content: center;
  padding: 30px;
`;

export const BorderRowWrapper = styled(RowWrapper)`
  border: 1px solid ${(props) => props.theme.lightStone};
`;

export const BorderCenterDiv = styled(CenterColumnDiv)`
  border: 1px solid ${(props) => props.theme.lightStone};
  border-radius: 0 10px 10px 0;
  border-left: none;
  padding: 0 15px;
  width: 100%;
`;
