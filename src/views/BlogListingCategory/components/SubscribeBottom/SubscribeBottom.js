import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import {makeStyles} from "@material-ui/core/styles"
import {Grid, Button, Link} from "@material-ui/core"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import {spacing} from "@material-ui/system/spacing"

const bull = (
  <Box
    component="span"
    sx={{display: "inline-block", mx: "2px", transform: "scale(0.8)"}}
  >
    •
  </Box>
)

const classes = {
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 20,
    textAlign: "center",
    color: "blue",
    fontFamily: "Roboto",
  },
}

const useStyles = makeStyles((theme) => ({
  textfield: {
    color: "#FFF",
    background: "#FFF",
    backgroundColor: "#FFF",
    input: {
      color: "#FFF",
      background: "#FFF",
    },
  },
  textfieldGrid: {
    [theme.breakpoints.up("xs")]: {
      paddingBottom: "1.0rem",
    },
    [theme.breakpoints.up("md")]: {
      paddingRight: "1.0em",
    },
    [theme.breakpoints.up("lg")]: {
      paddingRight: "1.0em",
    },
    [theme.breakpoints.up("xl")]: {
      paddingRight: "1.0em",
    },
  },
  heading: {
    "& h2": {
      [theme.breakpoints.down("md")]: {
        margin: "1.5em 0 0",
      },
      [theme.breakpoints.down("sm")]: {
        margin: "1em 0 0",
      },
    },
    "& h6": {
      margin: "1.5em 0",
      [theme.breakpoints.down("sm")]: {
        margin: "1em 0 0",
      },
    },
    [theme.breakpoints.up("xs")]: {
      paddingRight: "3rem",
      paddingBottom: "3rem",
    },
    [theme.breakpoints.up("md")]: {
      paddingRight: "3rem",
      paddingBottom: "3rem",
    },
    [theme.breakpoints.up("lg")]: {
      paddingRight: "7rem",
      paddingBottom: "3rem",
    },
    [theme.breakpoints.up("xl")]: {
      paddingRight: "3rem",
      paddingBottom: "3rem",
    },
  },
  image: {
    maxWidth: "80%",
    height: "auto",
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "4rem",
    },
    [theme.breakpoints.down("lg")]: {
      paddingLeft: "2rem",
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: "0",
      margin: "0 auto",
    },
  },
  reversemob: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
  listItemButton: {
    padding: "10px",
    "&:hover": {},
    "&:link": {},
    color: "white",
    whiteSpace: "nowrap",
    borderRadius: "16px",
    minWidth: "15.375rem",
    fontSize: "2rem",
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.5rem",
      minWidth: "10rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
      minWidth: "8rem",
    },
    textTransform: "initial",
    color: "#FFF",
  },
}))

const SubscribeBottom = (props) => {
  const {className, ...rest} = props
  const classes = useStyles()

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container justify="space-between">
        <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={12}
          lg={12}
          xl={12}
          data-aos={"fade-up"}
        >
          <Typography variant="h3" component="div" gutterBottom>
            subscribe to our newsletter
          </Typography>
        </Grid>
        <Grid
          item
          alignItems="center"
          xs={12}
          md={12}
          lg={12}
          xl={12}
          data-aos={"fade-up"}
        >
          <Typography variant="p" component="div" gutterBottom>
            Get news and insights to optimise your business through a
            application development and smarter eCommerce
            <br />
            <br />
            <br />
          </Typography>
        </Grid>
        <Grid
          item
          alignItems="center"
          xs={12}
          md={3}
          lg={3}
          xl={3}
          data-aos={"fade-up"}
          className={classes.textfieldGrid}
        >
          <TextField
            fullWidth
            id="filled-search"
            label="Your First Name"
            type="search"
            variant="filled"
            className={classes.textfield}
          />
        </Grid>

        <Grid
          item
          alignItems="center"
          xs={12}
          md={3}
          lg={3}
          xl={3}
          data-aos={"fade-up"}
          className={classes.textfieldGrid}
        >
          <TextField
            fullWidth
            id="filled-search"
            label="Your Last Name"
            type="search"
            variant="filled"
            className={classes.textfield}
          />
        </Grid>

        <Grid
          item
          alignItems="center"
          xs={12}
          md={3}
          lg={3}
          xl={3}
          data-aos={"fade-up"}
          className={classes.textfieldGrid}
        >
          <TextField
            fullWidth
            id="filled-search"
            label="Your Email"
            type="search"
            variant="filled"
            className={classes.textfield}
          />
        </Grid>

        <Grid
          item
          alignItems="center"
          xs={12}
          md={3}
          lg={3}
          xl={3}
          data-aos={"fade-up"}
          className={classes.textfieldGrid}
        >
          <Button
            size="large"
            variant="contained"
            color="primary"
            className={classes.listItemButton}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

SubscribeBottom.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
}

export default SubscribeBottom
