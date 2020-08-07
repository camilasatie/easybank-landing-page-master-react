import React from 'react';
import { ThemeProvider } from 'styled-components'

import theme from './styles/theme'
import GlobalStyle from './styles/global.styles'

import Heading from './components/Heading';
import SectionChoose from './components/SectionChoose';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Heading />
    <SectionChoose />
  </ThemeProvider>
);
export default App;
