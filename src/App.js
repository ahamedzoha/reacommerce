import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'

import { HomePage } from './pages/homepage/homepage.component'
import { Header } from './components/header/header.component'
import ShopPage from './pages/shop/shop.component'

class App extends React.Component {

  render() {

    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </div>

    )
  }

}

export default App;
