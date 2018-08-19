import { injectGlobal } from 'styled-components';

injectGlobal`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100%;
  }

  body {
    line-height: 1.5;
    background: white;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
`;
