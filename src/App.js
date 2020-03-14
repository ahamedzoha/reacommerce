import React from "react"
import "./App.css"
import { Route, Switch } from "react-router-dom"
import ReactGa from "react-ga"

import { HomePage } from "./pages/homepage/homepage.component"
import { Header } from "./components/header/header.component"
import ShopPage from "./pages/shop/shop.component"
import { SignInAndOut } from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"

import { auth } from "./firebase/firebase.utils"

function initializeAnalytics() {
  ReactGa.initialize("UA-41008872-4")
  ReactGa.pageview(window.location.pathname)
}

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
    initializeAnalytics()
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndOut} />
        </Switch>
      </div>
    )
  }
}

export default App
