import React from 'react';
import './App.css';

import {HomePage} from './components/homepage/homepage.component'

class App extends React.Component {
  constructor(props) {
    super(props)


  }



  render() {

    return (
      <div>
        <HomePage/>
      </div>
    )
  }

}

export default App;
