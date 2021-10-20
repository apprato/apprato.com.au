import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Toolbar,
  Hidden,
  List,
  ListItem,
  Typography,
  IconButton,
  Button,
} from '@material-ui/core';

import { Image } from 'components/atoms';

const useStyles = makeStyles(theme => ({
  root: {
  },
  flexGrow: {
    flexGrow: 1,
  },
  navigationContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(0, 0, '0px'),
    [theme.breakpoints.down('lg')]: {
      padding: theme.spacing(0, 0, '0px'),
    }
  },
  toolbar: {
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 0, '11.0625rem'),
    [theme.breakpoints.down('lg')]: {
      padding: theme.spacing(0, 0, 20),
    }
  },
  listItem: {
    cursor: 'pointer',
    padding: '0 1.875rem',
      [theme.breakpoints.down('lg')]: {
        padding: '0 1.2rem',
      },
      [theme.breakpoints.down('md')]: {
        padding: '0 1rem',
      },
  },
  listItemText: {
    flex: '0 0 auto',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    fontSize: '2rem',
      [theme.breakpoints.down('lg')]: {
        fontSize: '1.5rem',
      },
      [theme.breakpoints.down('md')]: {
        fontSize: '1rem',
      },
    color: '#202f43',
  },
  listItemButton: {
    whiteSpace: 'nowrap',
    borderRadius: '16px',
    minWidth: '15.375rem',
    fontSize: '2rem',
      [theme.breakpoints.down('lg')]: {
        fontSize: '1.5rem',
        minWidth: '10rem',
      },
      [theme.breakpoints.down('md')]: {
        fontSize: '1rem',
        minWidth: '8rem',
      },
    textTransform: 'initial',
  },
  iconButton: {
    padding: 0,
    '&:hover': {
      background: 'transparent',
    },
  },
  logoContainer: {
    width: '32.375rem',
    height: 'auto',
      [theme.breakpoints.down('md')]: {
        width: '18.75rem',
      }
  },
}));

const Topbar = props => {
  const { onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  return (
      <Toolbar disableGutters className={classes.toolbar} {...rest}>
      <Grid
          container
          justify="space-between"
        >
          <Grid
            item
            container
            alignItems="left"
            xs={8}
            md={4}
            lg={3}
            xl={3}
            data-aos={'fade-up'}
          >
        <div className={classes.logoContainer}>
          <a href="/" title="thefront">
            <Image
              className={classes.logoImage}
              src="/images/Apprato_Logo.svg"
              alt="thefront"
              lazy={false}
            />
          </a>
        </div>
        </Grid>
        <Grid
          item
          container
          alignItems="left"
          justify="flex-end"
          xs={2}
          md={6}
          lg={6}
          xl={6}
          data-aos={'fade-up'}
        >
          <Hidden smDown>
            <List className={classes.navigationContainer}>
              <ListItem className={classes.listItem}>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  className={classes.listItemText}
                  component="a"
                  href="/home"
                >
                  Home
                </Typography>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  className={classes.listItemText}
                  component="a"
                  href="/about"
                >
                  About
                </Typography>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  className={classes.listItemText}
                  component="a"
                  href="/services"
                >
                  Services
                </Typography>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  className={classes.listItemText}
                  component="a"
                  href="/team"
                >
                  Team
                </Typography>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  className={classes.listItemText}
                  component="a"
                  href="/case-studies"
                >
                  Case Studies
                </Typography>
              </ListItem>
            </List>
          </Hidden>
        </Grid>
        <Grid
          item
          container
          justify="flex-end"
          alignItems="center"
          xs={2}
          md={2}
          lg={3}
          xl={3}
        >
        <Hidden smDown>
          <Button
            size="large"
            variant="contained"
            color="primary"
            component="a"
            href="#contact"
            className={classes.listItemButton}
          >
            Contact
          </Button>
          </Hidden>
          <Hidden mdUp>
            <IconButton
              className={classes.iconButton}
              onClick={onSidebarOpen}
              aria-label="Menu"
            >
              <img src="../images/Hamburger_Menu.png"/>
            </IconButton>
          </Hidden>
        </Grid>
      </Grid>
    <div className={classes.flexGrow} />
    </Toolbar>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
};

export default Topbar;
