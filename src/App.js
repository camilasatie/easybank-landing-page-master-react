import React from 'react';
import { ThemeProvider } from 'styled-components'

import theme from './styles/theme'
import GlobalStyle from './styles/global.styles'

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <div className="App" />
  </ThemeProvider>
);
export default App;
