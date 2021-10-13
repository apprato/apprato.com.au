import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Divider } from '@material-ui/core';
import { Topbar, Footer, Sidebar } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'url(../images/bg-layers.png) no-repeat top',
    padding: '80px 15.8em 40px',
    maxWidth: theme.layout.contentWidth,
    margin: '0 auto 0',
    [theme.breakpoints.down('xl')]: {
      padding: '80px 16.875rem 40px',
    },
    [theme.breakpoints.down('lg')]: {
      padding: '80px 7em 40px',
    },
    [theme.breakpoints.down('md')]: {
      padding: '80px 5em 40px',
    },
    height: '100%',
  },
  rootfooter: {
    background: theme.palette.background.footer,
    margin: '0 auto 0',
    [theme.breakpoints.down('xl')]: {
      padding: '0 11em 0',
    },
    [theme.breakpoints.down('lg')]: {
      padding: '0 7em 0',
    },
    [theme.breakpoints.down('md')]: {
      padding: '0 5em 0',
    },
  },
}));

const Main = props => {
  const { children } = props;

  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  return (
    <div>
    <div className={clsx({
        [classes.root]: true,
      })}
    >
      <Topbar onSidebarOpen={handleSidebarOpen} />
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
      />
      <main>
        {children}
      </main>
      <Divider />
    </div>
    <div>
      <div className={clsx({
          [classes.rootfooter]: true,
        })}>
        <Footer />
      </div>
      </div>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
