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
