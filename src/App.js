import React from "react"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client"
import {Router, useLocation, useHistory} from "react-router-dom"
import {createBrowserHistory} from "history"
import {ThemeProvider} from "@material-ui/core/styles"
import {Paper, CssBaseline} from "@material-ui/core"
import AOS from "aos"

import theme from "./theme"
import Routes from "./Routes"

import "./theme/AktivGrotesk/fonts.css"
import "react-lazy-load-image-component/src/effects/opacity.css"
import "aos/dist/aos.css"

const browserHistory = createBrowserHistory()

browserHistory.listen((location) => {
  const hash = window.location.hash

  // Use setTimeout to make sure this runs after React Router's own listener
  setTimeout(() => {
    // Keep default behavior of restoring scroll position when user:
    // - clicked back button
    // - clicked on a link that programmatically calls `history.goBack()`
    // - manually changed the URL in the address bar (here we might want
    // to scroll to top, but we can't differentiate it from the others)
    if (location.action === "POP") {
      return
    }
    // In all other cases, scroll to top
    window.scrollTo(0, 0)

    // Scroll to from other pages to home page ids
    if (window.location.hash) {
      // Fragment exists
      setTimeout(() => {
        const id = hash.replace("#", "")
        const element = document.getElementById(id)
        const options = {
          behavior: "smooth",
          block: "start",
          duration: 2000,
        }
        if (element) {
          element.scrollIntoView(options)
        }
      }, 0)
    } else {
      //window.location.reload(false)
      // Reload cache for safari mobile as when you click back and forward the susbcribe form doesn't work.
      window.onpageshow = function(event) {
        if (event.persisted) {
          console.log("reload whole page")
          window.location.reload()
        }
      }
    }
  })
})

const App = () => {
  AOS.init({
    once: true,
    delay: 50,
    duration: 500,
    easing: "ease-in-out",
  })

  const client = new ApolloClient({
    uri: "http://3.24.116.71/graphql",
    cache: new InMemoryCache(),
  })

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Paper>
          <Router history={browserHistory}>
            <Routes />
          </Router>
        </Paper>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
