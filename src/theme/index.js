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
        sm: 768,
        md: 1024,
        lg: 1884,
        xl: 2880,
      },
    },
    spacing: 4,
    // Custom fonts - calculated using Rem to pixel converton, 1 rem = 16px
    // https://offroadcode.com/rem-calculator/
    typography: {
      fontSize: 16,
      fontFamily: "AktivGrotesk",
      fontWeight: '500',
      color: '#202f43',

      h1: {
        fontFamily: "AktivGrotesk-Bold",
      },
      h2: {
        fontFamily: "AktivGrotesk-Medium",
        letterSpacing: '-1px',
      },
      h3: {
        fontFamily: "AktivGrotesk-Medium",
        fontWeight: '500',
      },
      h4: {
        fontFamily: "AktivGrotesk-Medium",
        fontWeight: '500',
      },
      h5: {
        fontFamily: "AktivGrotesk-Medium",
        fontSize: '3em',
        fontWeight: '500',
      },
      h6: {
        fontFamily: "AktivGrotesk",
        fontSize: '2em',
        fontWeight: '500',
      },
      subtitle1: {
        fontFamily: "AktivGrotesk-Medium",
        fontSize: '1.75em',
        fontWeight: '500',
      },
      subtitle2: {
        fontFamily: "AktivGrotesk-Medium",
        fontSize: '2em',
        fontWeight: '500',
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
        [breakpoints.up("md")]: {
        //fontSize: pxToRem(32)
        }
      }
    }},
    palette,
    layout: {
      contentWidth: 2880,
      background: 'none',
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
      MuiTypography: {
        h1: {
          [breakpoints.up('xs')]: {
            fontSize: pxToRem(50)
          },
          [breakpoints.up('xl')]: {
            fontSize: pxToRem(108)
          },
        },
        h2: {
          [breakpoints.up('xs')]: {
            fontSize: pxToRem(64)
          },
          [breakpoints.up('md')]: {
            fontSize: pxToRem(40)
          },
          [breakpoints.up('lg')]: {
            fontSize: pxToRem(55)
          },
          [breakpoints.up('xl')]: {
            fontSize: pxToRem(104)
          },
        },
        h6: {
          [breakpoints.up('xs')]: {
            fontSize: pxToRem(24)
          },
          [breakpoints.up('md')]: {
            fontSize: pxToRem(12)
          },
          [breakpoints.up('lg')]: {
            fontSize: pxToRem(16)
          },
          [breakpoints.up('xl')]: {
            fontSize: pxToRem(32)
          },
        },
        h3: {
          [breakpoints.up('xs')]: {
            fontSize: pxToRem(64)
          },
          [breakpoints.up('md')]: {
            fontSize: pxToRem(30)
          },
          [breakpoints.up('lg')]: {
            fontSize: pxToRem(46)
          },
          [breakpoints.up('xl')]: {
            fontSize: pxToRem(92)
          },
        },
        h5: {
          [breakpoints.up('xs')]: {
            fontSize: pxToRem(28)
          },
          [breakpoints.up('md')]: {
            fontSize: pxToRem(20)
          },
          [breakpoints.up('lg')]: {
            fontSize: pxToRem(24)
          },
          [breakpoints.up('xl')]: {
            fontSize: pxToRem(48)
          },
        },
        h4: {
          [breakpoints.up('xs')]: {
            fontSize: pxToRem(42)
          },
          [breakpoints.up('md')]: {
            fontSize: pxToRem(25)
          },
          [breakpoints.up('lg')]: {
            fontSize: pxToRem(30)
          },
          [breakpoints.up('xl')]: {
            fontSize: pxToRem(60)
          },
        },
        subtitle2: {
          [breakpoints.up('md')]: {
            fontSize: pxToRem(12)
          },
          [breakpoints.up('lg')]: {
            fontSize: pxToRem(16)
          },
          [breakpoints.up('xl')]: {
            fontSize: pxToRem(32)
          },
        },
        subtitle1: {
          [breakpoints.up('md')]: {
            fontSize: pxToRem(11)
          },
          [breakpoints.up('lg')]: {
            fontSize: pxToRem(14)
          },
          [breakpoints.up('xl')]: {
            fontSize: pxToRem(28)
          },
        },
      },
    },
  }),
);

export default theme;
