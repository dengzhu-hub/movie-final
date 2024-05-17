import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import App from './App.tsx';
import './index.css';
import theme from './theme.ts';
import { GenreProvider } from './context/genreContext.tsx';
import QueryProvider from './react-query/QueryProvider.tsx';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <GenreProvider>
        <QueryProvider>
          <App />
          <ReactQueryDevtools />
        </QueryProvider>
      </GenreProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
