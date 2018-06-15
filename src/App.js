import React, { Component } from 'react';

import logo from './logo.svg';
import utils from './utils';

class App extends Component {
  constructor(){
    super();

    this.state = {
      loaded: false,
    };

    this.routeToContent = this.routeToContent.bind(this);
  }

  componentDidMount(){
    const { loaded } = this.state;
    utils.loading(loaded)
    .then(updatedState => {
      this.setState({loaded: updatedState});
    });
  }

  routeToContent() {
    console.log("Routing to content");
  }

  render() {
    console.log(this.state);
    return (
      <div className="app">
        <div className="zero-logo-container" onClick={this.routeToContent}>
          <img src={logo} className="zero-logo" alt="logo" />
        </div>
      </div>
    );
  }
}

export default App;
