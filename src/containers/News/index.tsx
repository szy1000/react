import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Title from '../../components/index';

export interface Props {
  match: any
}

export interface State {

}

class News extends React.Component<Props, State> {

  constructor(props: any, context: any) {
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