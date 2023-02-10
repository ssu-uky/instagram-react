import { createGlobalStyle } from 'styled-components';
import reset from 'styles-reset';

export const lightTheme = {
  fontColor: '#black',
  bgColor: 'lightgray',
};

export const darkTheme = {
  fontColor: 'white',
  bgColor: '#000',
};

export const Globalstyles = createGlobalStyle`
${reset}
*{
  box-sizing: border-box;
}
input {
  all:unset;
}
body {
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.bgColor};
}
`;
