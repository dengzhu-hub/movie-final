import { extendTheme, ThemeConfig } from '@chakra-ui/react';
const config: ThemeConfig = {
  initialColorMode: 'dark',
};
const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: '#ffe2ec',
      100: '#ffb3c5',
      200: '#fc839f',
      300: '#a6a6a6',
      400: '#737373',
      500: '#737373',
      600: '#595959',
      700: '#404040',
      800: '#262626',
      900: '#0d0d0d',
    },
  },
});

export default theme;
