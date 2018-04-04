import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Home extends React.Component {

  constructor(props: any, context: any) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div>aaaaaa</div>
    )
  };
}


export default Home;