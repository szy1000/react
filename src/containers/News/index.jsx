import React from 'react';
import ReactDOM from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';

// import Title from '../../components/Title/index.jsx';
import Title from '../../components/';

class News extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div id="news">
        <Title title="产品列表"/>
        <h1>News {this.props.match.params.id}</h1>   
      </div>
    );
  }
}

export default News;