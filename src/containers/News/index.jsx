import React from 'react';
import ReactDOM from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Title from '../../components/Title/index.jsx';

class News extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    // console.log(this.props.match.params.id)
    return (
      <div id="news">
        <Title title="产品列表"/>
        <h1>News</h1>   
      </div>
    );
  }
}

export default News;