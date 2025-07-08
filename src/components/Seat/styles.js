import styled, { css } from 'styled-components';



export const SeatItem = styled.li`
  width: 26px;
  height: 26px;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3px;
  border-radius: 50%;
  ${({ $available, $selected }) => {
    if ($selected)
      return css`
        background: #FBE192;
        border: 1px solid #F7C52B;
        color: #000000;
      `;
    if ($available)
      return css`
        background: #1AAE9E;
        border: 1px solid #0E7D71;
        color: #000000;
      `;
    return css`
      background: #5C5C5C;
      border: 1px solid #000000;
      color: #5C5C5C; 
    `;
  }}
`;