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
          <Typography
          variant="h6"
            color="textSecondary"
            className={classes.listItemLink}
            component="a"
            href="/home"
          >
            Home
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Typography
          variant="h6"
            color="textSecondary"
            className={classes.listItemLink}
            component="a"
            href="/about"
          >
            About
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Typography
          variant="h6"
            color="textSecondary"
            className={classes.listItemLink}
            component="a"
            href="/services"
          >
            Services
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Typography
          variant="h6"
            color="textSecondary"
            className={classes.listItemLink}
            component="a"
            href="/team"
          >
            Team
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Typography
          variant="h6"
            color="textSecondary"
            className={classes.listItemLink}
            component="a"
            href="/case-studies"
          >
            Case Studies
          </Typography>
        </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          size="large"
          variant="contained"
          color="primary"
          fullWidth
          component="a"
          href="/contact"
        >
          Contact
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
