import React from 'react';
import { TrieProvider } from './contexts/TrieContext';
import Homepage from './pages/Homepage';
import { ThemeProvider } from 'styled-components';
import { theme } from './themes/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <TrieProvider>
        <Homepage />
      </TrieProvider>
    </ThemeProvider>
  );
};

export default App;
