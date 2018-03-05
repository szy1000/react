import React from 'react';
import ReactDOM from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class News extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.parentData = 55
  }

  render() {
    return (
      <div id="news">
        <h1>News</h1>   
      </div>
    );
  }
}

export default News;