import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import {makeStyles} from "@material-ui/core/styles"
import {Grid} from "@material-ui/core"
import {SectionHeader} from "components/molecules"
import Box from "@material-ui/core/Box"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import {gql} from "graphql-tag"
import {useQuery, useMutation} from "@apollo/react-hooks"

const GET_POSTS = gql`
  {
    posts {
      nodes {
        title
        uri
        slug
        date
      }
    }
    pages {
      nodes {
        id
      }
    }
  }
`
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
  items: {
    backgroundColor: "#FFFFFF",
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
  categories: {
    margin: "5rem",
    backgroundColor: "#000000",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
      margin: "5rem",
      backgroundColor: "#000000",
    },
  },
}))

const Items = (props) => {
  const {className, ...rest} = props
  const classes = useStyles()
  const {loading, error, data} = useQuery(GET_POSTS)
  if (loading) return <p>Loading Posts...</p>
  if (error) return <p>An error occured!</p>

  if (data) {
    //    const listItems = items.map((item) => (
    //      <li key={item.title}>{item.title}</li>
    //    ))
  }
  let items = data.posts.nodes
  console.log(items)

  const post = data.posts.nodes[0]

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container justify="space-between" className={classes.reversemob}>
        {items.map((item) => (
          <Grid
            item
            container
            justify="flex-start"
            xs={12}
            md={6}
            lg={6}
            xl={6}
            data-aos={"fade-up"}
          >
            <Card sx={{maxWidth: 345}} className={classes.items}>
              <CardMedia component="img" height="140" image="" alt="" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">last week</Button>
                <Button size="small">5 min read</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}

        {items ? <p></p> : <p>{post.title}</p>}
      </Grid>
    </div>
  )
}

Items.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
}

export default Items
//export default graphql(getPosts)(Items) // Bind the query to the compoent to have access to the variables in the return.
