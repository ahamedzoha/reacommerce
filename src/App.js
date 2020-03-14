import React from "react"
import "./App.css"
import { Route, Switch } from "react-router-dom"

import { HomePage } from "./pages/homepage/homepage.component"
import { Header } from "./components/header/header.component"
import ShopPage from "./pages/shop/shop.component"
import { SignInAndOut } from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"

import { auth } from "./firebase/firebase.utils"
import { createBrowserHistory } from "history"
import ReactGA from "react-ga"

const history = createBrowserHistory()
ReactGA.initialize("UA-41008872-4")
history.listen(location => {
  ReactGA.set({ page: location.pathname }) // Update the user's current page
  ReactGA.pageview(location.pathname) // Record a pageview for the given page
})

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" history={history} component={HomePage} />
          <Route path="/shop" history={history} component={ShopPage} />
          <Route path="/signin" history={history} component={SignInAndOut} />
        </Switch>
      </div>
    )
  }
}

export default App
