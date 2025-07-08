import { createGlobalStyle } from 'styled-components';

import styled from 'styled-components';

export default createGlobalStyle`
  * { box-sizing: border-box; }
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #C3CFD9;
    color: #293845;
  }
  button, a { cursor: pointer; text-decoration: none; }
`;

export const COLORS = {
  background: '#C3CFD9',
  navbar: '#E8833A',
  availableFill: '#1AAE9E',
  availableText: '#000000',
  selectedFill: '#FBE192',
  selectedBorder: '#F7C52B',
  unavailableFill: '#5C5C5C',
  unavailableText: '#FFFFFF',
  darkCard: '#293845',
  pinkButton: '#E8833A',
};



