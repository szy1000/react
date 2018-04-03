import React from 'react';
import ReactDOM from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.scss';

class Banner extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div id="banner">
        Banner
        <h1>{this.props.value}</h1>
        <button onClick={this.props.parentFn}> click</button>  
      </div>
    );
  }


}

export default Banner;