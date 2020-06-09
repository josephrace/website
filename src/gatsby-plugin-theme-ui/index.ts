export default {
  useColorSchemeMediaQuery: true,
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  colors: {
    text: '#111',
    background: '#fafafa',
    modes: {
      dark: {
        text: '#fafafa',
        background: '#111',
      },
    },
  },
  fonts: {
    body: '"Work Sans", sans-serif',
    heading: '"PT Serif", serif',
  },
  lineHeights: {
    body: 1.6,
    heading: 1.2,
  },
  sizes: {
    container: '1280px',
  },
  buttons: {
    primary: {
      color: 'background',
      bg: 'text',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
  },
};
