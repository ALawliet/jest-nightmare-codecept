import React, { Component } from 'react'
import logo from './logo.svg'

import Button from './Button';

class App extends Component {

  state = {
    count: 0,
  }

  onClick = () => {
    this.setState(previousState => ({
      count: previousState.count + 1,
    }));
  }

  render() {
    return (
      <div className="app">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="app-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <text>{this.state.count}</text>
        <Button
          label="+"
          onClick={this.onClick}
        />
      </div>
    )
  }

}

export default App
