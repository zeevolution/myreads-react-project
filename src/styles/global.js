import { injectGlobal } from 'styled-components';
import 'font-awesome/css/font-awesome.css';

injectGlobal`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    .root {
      height: 100%;
    }
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    line-height: 1.5;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    .app {
      background: white;
    }
  }
`;
