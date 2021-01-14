import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  button {
    cursor: pointer;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
`;
