import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import AktivGroteskReg from './AktivGrotesk/AktivGrotesk-Regular.ttf';
import AktivGroteskMed from './AktivGrotesk/AktivGrotesk-Medium.ttf';
import AktivGroteskBold from './AktivGrotesk/AktivGrotesk-Bold.ttf';

import palette from './palette';

const theme = responsiveFontSizes(
  createMuiTheme({
    palette,
    layout: {
      contentWidth: 2880,
      background: 'none',
    },
    typography: {
      fontFamily: ['AktivGroteskReg', '"Open Sans"'],
      h1: {
       fontFamily: '"AktivGroteskBold", Open Sans',
      }
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
