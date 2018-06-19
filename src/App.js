import {TweenLite, TimelineLite} from 'gsap';
import React, { Component } from 'react';
import logo from './logo.svg';
import utils from './utils';

const tl = new TimelineLite();

class App extends Component {
  constructor(){
    super();

    this.state = {
      loaded: false,
    };
    this.demoContainer = null;
    this.logoContainer = null;
    this.loadingEl = null;
    this.logo = null;
    this.zeroText = null;
    this.routeToContent = this.routeToContent.bind(this);
  }

  componentDidMount(){
    const { loaded } = this.state;

    tl.to(this.loadingEl, 1, {
      height: "40%",
      onComplete: () => {
        utils.loading(loaded)
        .then(updatedState => {
          TweenLite.to(this.loadingEl, 1, {
            height: "100%",
            onComplete: this.setState({loaded: updatedState})
          });
        })
      },
    });
  }

  routeToContent() {
    const logoHeight = this.demoContainer.clientHeight;
    const logoWidth = this.demoContainer.clientWidth;

    const widthRatio = window.innerWidth / logoWidth;

    tl.to(this.demoContainer, .5, {
      height: logoHeight * widthRatio, 
      width: logoWidth * widthRatio,
    })
    .to(this.demoContainer, .25, {
      borderRadius: "0%",
      height: "100%",
      width: "100%",
      onComplete: () =>{
        this.setState({loaded: false}, () => {
          window.history.pushState(undefined, undefined, '/content')
        })
      }
    })
    .to(this.logoContainer, 1, {
      y: `-${window.innerHeight * .3}`,
    })
    .to(this.zeroText , 1, {
      display: "flex",
      y: `-${window.innerHeight/2 + 30}px`
,     opacity: 1
    });
  }

  render() {
    const { loaded } = this.state;

    return (
      <div className="app">
        <div 
          className={`zero-demo-container ${loaded ? "zero-logo-loaded" : ""}`} 
          onClick={this.routeToContent}
          ref={el => this.demoContainer = el}
        >
          <div
            className="zero-logo-container"
            ref={el => this.logoContainer = el}
          >
            <img 
            src={logo} 
            ref={el => this.logo = el}
            className={`zero-logo ${loaded}`}
            alt="logo" />
          </div>        
          <div
            className={`zero-text-container`}
            style={{bottom: `-${window.innerHeight/2}px`}}
            ref={el => this.zeroText = el}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non cursus tellus, sed faucibus sapien. Ut volutpat nisi felis, vel suscipit orci accumsan eget. Aliquam rhoncus felis tristique sapien accumsan facilisis ac sed nulla.
            </p>
            <p>
              Donec non tortor placerat, tincidunt metus at, blandit elit. Mauris nec volutpat nisl, vitae pharetra arcu. Vivamus ut sem eu leo rutrum tincidunt sed at metus. Integer metus massa, malesuada tristique mattis nec, tempor nec mauris. 
            </p>
            <p
             style={{marginBottom: 0}}
            >
              Fusce dolor mi, commodo ut eleifend et, sodales non urna. Curabitur commodo mollis dolor, at rhoncus erat mattis nec. Nam ut ultrices erat.
            </p>
          </div>
        </div>
        <div
          className={`zero-loading ${loaded ? "zero-loaded" : ""}` }
          ref={el => this.loadingEl = el}
        />
      </div>
    );
  }
}

export default App;
