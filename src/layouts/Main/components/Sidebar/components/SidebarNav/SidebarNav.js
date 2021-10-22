/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  Typography,
  ListItemIcon,
  Button,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const useStyles = makeStyles(theme => ({
  root: {
  },
  listItem: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  listItemIcon: {
    minWidth: 'auto',
  },
  listItemLink: {
    textDecoration: 'none',
  },
  closeIcon: {
    justifyContent: 'flex-end',
    cursor: 'pointer',
  },
  divider: {
    width: '100%',
  },
}));

const SidebarNav = props => {
  const { onClose, className, ...rest } = props;
  const classes = useStyles();

  return (
    <List {...rest} className={clsx(classes.root, className)}>
      <ListItem className={classes.closeIcon} onClick={onClose}>
        <ListItemIcon className={classes.listItemIcon}>
          <CloseIcon fontSize="small" />
        </ListItemIcon>
      </ListItem>
        <ListItem className={classes.listItem}>
        <Link to="home" smooth={true}>
          <Typography
          variant="h6"
            color="textSecondary"
            className={classes.listItemLink}
            component="a"
            href="/home"
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
      <ListItem className={classes.listItem}>
        <Button
          size="large"
          variant="contained"
          color="primary"
          fullWidth
        >
          <Link to="contact" smooth={true} duration={2500}>
            Contact</Link>
        </Button>
      </ListItem>
    </List>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default SidebarNav;
