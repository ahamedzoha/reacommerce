import React from "react"
import "./App.css"
import { Route, Switch } from "react-router-dom"

import { HomePage } from "./pages/homepage/homepage.component"
import { Header } from "./components/header/header.component"
import ShopPage from "./pages/shop/shop.component"
import { SignInAndOut } from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"

import { auth, createUserProfileDocument } from "./firebase/firebase.utils"
import { init_google_analytics, log_page_view } from "./utils/_analytics"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      const userRef = await createUserProfileDocument(user)

      userRef.onSnapshot(snapshot => {
        this.setState({
          currentUser: {
            id: snapshot.id,
            ...snapshot.data()
          }
        })
      })
    })
    init_google_analytics()
    log_page_view()
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
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
