import styled from "styled-components";

const Btn = styled.button`
  font-weight: bold;
  font-size: 0.9rem;
  border: none;
  cursor: pointer;
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
  ({ theme }) => `
    border-radius: 30px;
    background-color: ${theme.darkBlue};
    padding: 10px 15px;
    color: ${theme.lightGreen};
  `
);

export const BigBtn = styled(Btn)(
  ({ theme }) => `
    background-color: white;
    color: ${theme.lightBlue};
    padding: 10px;
    border-radius: 5px;
    font-size: 1.1rem;
  `
);

export const VioletBtn = styled(Btn)`
  background-color: ${(props) => props.theme.violet};
  color: white;
  padding: 10px 20px;
  border-radius: 15px;
  font-size: 1.1rem;
  text-transform: uppercase;
`;

export const TransparentBtnIcon = styled(Btn)`
  background-color: rgba(255, 255, 255, 0);
  display: flex;
  align-items: center;
  font-size: 1rem;
`;

export const TransparentBlackBtn = styled(TransparentBtnIcon)`
  color: black;
  padding-right: 15px;

  svg {
    font-size: 1.5rem;
  }
`;

export const TransparentWhiteBtn = styled(TransparentBtnIcon)`
  color: white;
`;

export const CircleBlueBtn = styled(Btn)(
  ({ theme }) => `
    background-color: ${theme.darkBlue};
    border-radius: 50%;
    color: white;
    padding: 15px 16px;
    font-size: 0.8rem;
  `
);

export const CircleRoseBtn = styled(CircleBlueBtn)(
  ({ theme }) => `
    color: ${theme.rose};
  `
);

export const CircleYellowBtn = styled(CircleBlueBtn)(
  ({ theme }) => `
    color: ${theme.yellow};
  `
);
