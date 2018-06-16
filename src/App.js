import React, { PureComponent } from 'react';
import {TweenLite} from 'gsap';
import logo from './logo.svg';
import utils from './utils';

class App extends PureComponent {
  constructor(){
    super();

    this.state = {
      loaded: false,
    };

    this.loadingEl = null;
    this.logoContainer = null;
    this.routeToContent = this.routeToContent.bind(this);
  }

  componentDidMount(){
    const { loaded } = this.state;
    console.log(window.outerHeight);
    console.log(window.outerWidth);
    TweenLite.from(this.loadingEl, 5, {y: window.outerHeight} );

    // utils.loading(loaded)
    // .then(updatedState => {
    //   this.setState({loaded: updatedState});
    // });
  }

  routeToContent() {
    console.log("Routing to content");
  }

  render() {
    console.log(TweenLite);
    return (
      <div className="app">
        <div 
          className="zero-logo-container" 
          onClick={this.routeToContent}
          ref={el => this.logoContainer = el}
          tabIndex={1}
        >
          <img src={logo} className="zero-logo" alt="logo" />
        </div>
        <div
          className="zero-loading"
          ref={el => this.loadingEl = el}
        />
      </div>
    );
  }
}

export default App;
