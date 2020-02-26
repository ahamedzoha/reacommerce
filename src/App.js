import React from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom'

import { HomePage } from './pages/homepage/homepage.component'

class App extends React.Component {
  
  render() {

    return (
      <div>
        <Route exact path="/" component={HomePage} />
        
      </div>
    )
  }

}

export default App;
