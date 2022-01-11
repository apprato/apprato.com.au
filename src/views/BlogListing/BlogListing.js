import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import {Section} from "components/organisms"
import {Header, Body, Items, SubscribeBottom} from "./components"
import {gql} from "graphql-tag"
import {useQuery} from "@apollo/react-hooks"
import {useLocation} from "react-router-dom"

import {sas1, sas2, sas3, sas4, sas5} from "./data"

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
  },
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5),
    },
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  shape: {},
}))

const GET_POST = gql`
  {
    post(
      id: "how-to-enable-tab-to-complete-for-new-users-in-ubuntu"
      idType: SLUG
    ) {
      title
      uri
      slug
      date
      content
    }
  }
`

const BlogListing = () => {
  const classes = useStyles()
  const location = useLocation()

  console.log(location.pathname)
  const {loading, error, data} = useQuery(GET_POST)

  if (loading) return <p>Loading Posts...</p>
  if (error) return <p>An error occured!</p>

  console.log(data)

  return (
    <div className={classes.root}>
      <Section className={classes.pagePaddingTop}>
        <Header post={data.post} />
      </Section>
      <Section className={classes.pagePaddingTop}>
        <Body post={data.post} />
      </Section>
      <Section className={classes.pagePaddingTop}>
        <SubscribeBottom />
      </Section>
    </div>
  )
}

export default BlogListing
