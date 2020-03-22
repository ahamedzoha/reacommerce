import React from "react"
import "./App.css"
import { Route, Switch } from "react-router-dom"
import { connect } from "react-redux"

import { HomePage } from "./pages/homepage/homepage.component"
import Header from "./components/header/header.component"
import ShopPage from "./pages/shop/shop.component"
import { SignInAndOut } from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"
import { auth, createUserProfileDocument } from "./firebase/firebase.utils"
import { init_google_analytics, log_page_view } from "./utils/_analytics"
import { setCurrentUser } from "./redux/user/user.actions"

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
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
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndOut} />
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App)
