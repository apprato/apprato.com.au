import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-scroll';

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
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 0, 12),
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
                <Link to="/" smooth={true}>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    className={classes.listItemText}
                  >
                    Home
                  </Typography>
                </Link>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Link to="about" smooth={true} duration={2500}>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  className={classes.listItemText}
                >
                  About
                </Typography>
                </Link>
              </ListItem>
              <ListItem className={classes.listItem}>
              <Link to="services" smooth={true} duration={2500}>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  className={classes.listItemText}
                >
                  Services
                </Typography>
                </Link>
              </ListItem>
              <ListItem className={classes.listItem}>
              <Link to="team" smooth={true} duration={2500}>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  className={classes.listItemText}
                >
                  Team
                </Typography>
                </Link>
              </ListItem>
              <ListItem className={classes.listItem}>
              <Link to="case-studies" smooth={true} duration={2500}>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  className={classes.listItemText}
                >
                  Case Studies
                </Typography>
                </Link>
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
            className={classes.listItemButton}
          ><Link to="contact" smooth={true} duration={2500}>
            Contact</Link>
          </Button>
          </Hidden>
          <Hidden mdUp>
            <IconButton
              className={classes.iconButton}
              onClick={onSidebarOpen}
              aria-label="Menu"
            >
              <img src="../images/Hamburger_Menu.png" alt=""/>
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
