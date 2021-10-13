import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import palette from './palette';

const defaultTheme = createMuiTheme({});
const { breakpoints, typography: { pxToRem } } = defaultTheme

const theme = responsiveFontSizes(
  createMuiTheme({

    // Breakpoints
    breakpoints: {
      values: {
        xs: 0,
        sm: 479,
        md: 676,
        lg: 1220,
        xl: 1700,
      },
    },
    // Custom fonts - calculated using Rem to pixel converton, 1 rem = 16px
    // https://offroadcode.com/rem-calculator/
    typography: {
      fontFamily: "AktivGrotesk",
      fontWeight: '500',
      color: '#202f43',
      h1: {
        fontFamily: "AktivGrotesk-Bold",
      },
      h2: {
        fontFamily: "AktivGrotesk-Medium",
        fontSize: '6.5em',
        letterSpacing: '-1px',
      },
      h3: {
        fontFamily: "AktivGrotesk-Medium",
        fontSize: '5.875em',
      },
      h4: {
        fontFamily: "AktivGrotesk-Medium",
      },
      h5: {
        fontFamily: "AktivGrotesk-Medium",
      },
      h6: {
        fontFamily: "AktivGrotesk",
        fontSize: '2em',
      },
      button: {
        fontFamily: "AktivGrotesk-Medium",
        fontWeight: '500',
      },
      body1: {
        fontFamily: "AktivGrotesk",
      },
    },

    overrides: {
    MuiTypography: {
      headline: {
        fontSize: pxToRem(50),
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
    components: {
      MuiCssBaseline: {
      },
    },
    zIndex: {
      appBar: 1200,
      drawer: 1100,
    },
    overrides: {
      MuiButton: {
        root: {
          // Some CSS
          boxShadow: 'none',
          '&:hover': {
            textDecoration: 'none',
            backgroundColor: '#35C37D',
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
              backgroundColor: '#35C37D',
            },
          },
        },
      },
    },
  }),
);

export default theme;


