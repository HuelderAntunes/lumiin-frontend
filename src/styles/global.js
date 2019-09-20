import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css'
const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

html, body, #root {
  height: 100%;
  width: 100%;
}

body {
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antiliased !important;
  font-family: 'Open Sans', sans-serif;
}

`


export default GlobalStyle
