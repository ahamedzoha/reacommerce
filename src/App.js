import React from "react"
import "./App.css"
import { Route, Switch } from "react-router-dom"

import { HomePage } from "./pages/homepage/homepage.component"
import { Header } from "./components/header/header.component"
import ShopPage from "./pages/shop/shop.component"
import { SignInAndOut } from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"

class App extends React.Component {
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

export default App
