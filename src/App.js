import React, { Component } from 'react';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="zero-logo-container">
          <img src={logo} className="zero-logo" alt="logo" />
        </div>
      </div>
    );
  }
}

export default App;
