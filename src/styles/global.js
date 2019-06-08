import { createGlobalStyle } from 'styled-components';
import 'rc-slider/assets/index.css';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0
}

html, body, #root {
  height: 100% /* abole o position absolute. Ocupa 100% da tela*/
}

body {
  background: #181818;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  font-family: "Montserrat", sans-serif; /* sans-serif segunda opção*/
  color: #FFF
}

button {
  cursor: pointer;
}
`;
