/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from "react"
import clsx from "clsx"
import PropTypes from "prop-types"
import {makeStyles} from "@material-ui/core/styles"
import {
  List,
  ListItem,
  Typography,
  ListItemIcon,
  Button,
} from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"
import {Link} from "react-scroll"
import {Link as LinkHref} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {},
  listItem: {
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0 20px 15px",
  },
  listItemIcon: {
    minWidth: "auto",
  },
  listItemLink: {
    textDecoration: "none",
    cursor: "pointer",
  },
  closeIcon: {
    justifyContent: "flex-end",
    cursor: "pointer",
  },
  divider: {
    width: "100%",
  },
}))

const SidebarNav = (props) => {
  const {onClose, className, ...rest} = props
  const classes = useStyles()

  return (
    <List {...rest} className={clsx(classes.root, className)}>
      <ListItem className={classes.closeIcon} onClick={onClose}>
        <ListItemIcon className={classes.listItemIcon}>
          <CloseIcon fontSize="small" />
        </ListItemIcon>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/" smooth={true} onClick={onClose}>
          <Typography
            variant="body1"
            color="textSecondary"
            className={classes.listItemLink}
          >
            Home
          </Typography>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="about" smooth={true} duration={2500} onClick={onClose}>
          <Typography
            variant="body1"
            color="textSecondary"
            className={classes.listItemLink}
          >
            About
          </Typography>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="services" smooth={true} duration={2500} onClick={onClose}>
          <Typography
            variant="body1"
            color="textSecondary"
            className={classes.listItemLink}
          >
            Services
          </Typography>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="team" smooth={true} duration={2500} onClick={onClose}>
          <Typography
            variant="body1"
            color="textSecondary"
            className={classes.listItemLink}
          >
            Team
          </Typography>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="case-studies" smooth={true} duration={2500} onClick={onClose}>
          <Typography
            variant="body1"
            color="textSecondary"
            className={classes.listItemLink}
          >
            Case Studies
          </Typography>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <LinkHref href="/blog" smooth={true} duration={2500} onClick={onClose}>
          <Typography
            variant="body1"
            color="textSecondary"
            className={classes.listItemLink}
          >
            Blog
          </Typography>
        </LinkHref>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button size="large" variant="contained" color="primary" fullWidth>
          <Link to="contact" smooth={true} duration={2500} onClick={onClose}>
            Contact
          </Link>
        </Button>
      </ListItem>
    </List>
  )
}

SidebarNav.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
}

export default SidebarNav
