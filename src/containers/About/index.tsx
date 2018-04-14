import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Banner from '../About/Banner/index';

import './style.scss';

export interface Props {

}

export interface State {
  value: number,
  sentence: string
}

class About extends React.Component<Props, State> {
  constructor(props: any, context: any) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      value: 5,
      sentence: 'aa'
    }
  }

  render() {
    return (
      <div id="about">
        <div>
          {/*地址：{this.props.home.address}*/}
          {/*电话：{this.props.home.tel}*/}
        </div>
        <img src={require('../../static/images/webpack.jpeg')} alt="logo"/>
        <button onClick={() => {
          this.setState({
            value: (this.state.value + 1)
          })
        }}>add
        </button>
        <Banner {...this.props} parentFn={this.parentFn.bind(this)} {...this.state}/>
        <h1>About</h1>
      </div>
    );
  }

  parentFn() {
    this.setState({
      value: (this.state.value - 1)
    })
  }

  changeParentData() {
    this.setState({
      sentence: 'has\'t changed'
    })
  }
}

export default About;