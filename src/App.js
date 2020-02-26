import React from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom'

import { HomePage } from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'

class App extends React.Component {
  
  render() {

    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route  path="/shop" component={ShopPage}/>
      </Switch>
    )
  }

}

export default App;
