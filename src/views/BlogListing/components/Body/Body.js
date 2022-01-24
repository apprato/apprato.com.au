import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import {makeStyles} from "@material-ui/core/styles"
import {Grid, Typography, TextField, Button, Link} from "@material-ui/core"
import {SectionHeader} from "components/molecules"

const useStyles = makeStyles((theme) => ({
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
    [theme.breakpoints.up("md")]: {
      paddingRight: "3rem",
    },
    [theme.breakpoints.up("lg")]: {
      paddingRight: "12rem",
    },
    [theme.breakpoints.up("xl")]: {
      paddingRight: "23rem",
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
  banner: {
    marginTop: "4rem",
    height: "100%",
    width: "100%",
  },
  subscription: {
    backgroundColor: "#000",
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
  workTogether: {
    backgroundColor: "#000000",
  },
  body: {
    paddingRight: "4rem",
  },
  right: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}))

const Body = (props) => {
  const {className, ...rest} = props
  const classes = useStyles()
  const post = props.post
  const headerImage =
    "http://3.24.116.71/wp-content/uploads/" +
    post.featuredImage.node.mediaDetails.file

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container justify="space-between" className={classes.reversemob}>
        <Grid
          item
          alignItems="center"
          xs={12}
          sm={12}
          md={12}
          lg={9}
          xl={9}
          data-aos={"fade-up"}
          className={classes.body}
        >
          <Grid
            item
            alignItems="center"
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            data-aos={"fade-up"}
          >
            <img className={classes.banner} src={headerImage} />
          </Grid>
          <div>
            <div dangerouslySetInnerHTML={{__html: post.content}} />
          </div>
        </Grid>
        <Grid
          item
          justify="flex-start"
          xs={12}
          md={3}
          lg={3}
          xl={3}
          data-aos={"fade-up"}
          className={classes.right}
        >
          <Grid
            item
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
              Get news and insights to optimise your business througha
              application development and smarter eCommerce
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
            className={classes.textfield}
          >
            <TextField
              fullWidth
              id="filled-search"
              label="Your First Name"
              type="search"
              variant="filled"
            />
          </Grid>

          <Grid
            item
            alignItems="center"
            xs={12}
            md={12}
            lg={12}
            xl={12}
            data-aos={"fade-up"}
            className={classes.textfield}
          >
            <TextField
              fullWidth
              id="filled-search"
              label="Your Last Name"
              type="search"
              variant="filled"
            />
          </Grid>

          <Grid
            item
            alignItems="center"
            xs={12}
            md={12}
            lg={12}
            xl={12}
            data-aos={"fade-up"}
            className={classes.textfield}
          >
            <TextField
              fullWidth
              id="filled-search"
              label="Your Email"
              type="search"
              variant="filled"
            />
          </Grid>

          <Grid
            item
            alignItems="center"
            xs={12}
            md={12}
            lg={12}
            xl={12}
            data-aos={"fade-up"}
            className={classes.textfield}
          >
            <Button
              size="large"
              variant="contained"
              color="primary"
              className={classes.listItemButton}
            >
              <Link to="contact" smooth={true} duration={2500}>
                Submit
              </Link>
            </Button>
          </Grid>

          <Grid
            item
            alignItems="center"
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className={classes.workTogether}
          >
            <Typography variant="h3" component="div" gutterBottom>
              let's work together
            </Typography>
            <Typography variant="h4" component="div" gutterBottom>
              Speak to a digital specialist now - not a salesman
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

Body.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
}

export default Body
