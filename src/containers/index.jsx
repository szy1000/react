import React from 'react';
import ReactDOM from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './Home/index.jsx';
// import About from './About/index.jsx';
// import News from './News/index.jsx';
import Irouter from './Router/index.jsx'; 


class App extends React.Component<Props, State> {

  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div>
        <Home name="home"/>
        <Irouter/>
      </div>
    );
  }
}

export default App;