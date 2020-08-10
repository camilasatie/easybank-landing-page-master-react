import React from 'react';
import { ThemeProvider } from 'styled-components'

import theme from './styles/theme'
import GlobalStyle from './styles/global.styles'

import Heading from './components/Heading';
import SectionChoose from './components/SectionChoose';
import SectionArticles from './components/SectionArticles';
import Footer from './components/Footer';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Heading />
    <SectionChoose />
    <SectionArticles/>
    <Footer />
  </ThemeProvider>
);
export default App;
