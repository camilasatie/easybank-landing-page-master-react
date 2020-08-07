import { createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`

  :root {
    --DarkBlue: hsl(233, 26%, 24%);
    --LimeGreen: hsl(136, 65%, 51%);
    --BrightCyan: hsl(192, 70%, 51%);
    --GrayishBlue: hsl(233, 8%, 62%);
    --LightGrayishBlue: hsl(220, 16%, 96%);
    --VeryLightGray: hsl(0, 0%, 98%);
    --White: hsl(0, 0%, 100%)
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: 'Public Sans', sans-serif;
    font-size: 18px;
  }
`

export default GlobalStyle;