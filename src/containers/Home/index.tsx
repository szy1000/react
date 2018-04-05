import * as React from 'react';
import * as PureRenderMixin from 'react-addons-pure-render-mixin';


import Header from './Header/index';
import Category from './Category/index.jsx';


class Home extends React.Component {

  constructor(props: any, context: any) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div>
        <Header cityName={"南京"}/>
        <Category/>
      </div>
    )
  };
}


export default Home;