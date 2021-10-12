import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import AktivGroteskReg from './AktivGrotesk/AktivGrotesk-Regular.woff2';
import AktivGroteskMed from './AktivGrotesk/AktivGrotesk-Medium.ttf';
import AktivGroteskBold from './AktivGrotesk/AktivGrotesk-Bold.ttf';
import palette from './palette';

const defaultTheme = createMuiTheme({});
const { breakpoints, typography: { pxToRem } } = defaultTheme

const theme = responsiveFontSizes(
  createMuiTheme({
    overrides: {
    MuiTypography: {
      headline: {
        fontSize: pxToRem(24),
        [breakpoints.up("md")]: {
          fontSize: pxToRem(32)
        }
      }
    }},
    palette,
    layout: {
      contentWidth: 2880,
      background: 'none',
    },
    typography: {
      fontSize: 20,
      fontFamily: [
        `'AktivGrotesk'`,
      ].join(','),
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'AktivGroteskReg';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('AktivGrotesk'), local('AktivGrotesk-Regular'), url(${AktivGroteskReg}) format('woff2');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        `,
      },
    },
    zIndex: {
      appBar: 1200,
      drawer: 1100,
    },
    overrides: {
      MuiButton: {
        containedSecondary: {
          color: 'pink',
        },
      },
    },
  }),
);

export default theme;
