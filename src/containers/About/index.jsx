import React from 'react';
import ReactDOM from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.scss';

class About extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.parentData = 55
  }

  render() {
    return (
      <div id="about">
        <h1>About</h1>   
      </div>
    );
  }
}

export default About;