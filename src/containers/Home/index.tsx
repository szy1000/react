import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Header from './Header/index';
import Category from './Category/index.jsx';
import Discount from './Discount/index';
import Banner from './Banner/index';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as homeActions from '../../redux/actions/home.jsx'

// import { bindActionCreators } from "_redux@3.7.2@redux";
// import * as homeActions from "../../redux/actions/home";


export interface Props {
  home?: Object,
}

export interface State {
  value: number,
  sentence?: string,
  home: any
}

// @connect(
//   state => state.home,
//   dispatch => bindActionCreators(homeActions, dispatch)
// )

class Home extends React.Component<Props, State> {

  constructor(props: any, context: any) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      home: {},
      value: 5,
    }
  }

  render() {
    return (
      <div>
        <Header cityName={"南京"}/>
        <Category/>
        <Discount/>
        <div>
          {/*地址：{this.props.home}*/}
          {/*电话：{this.props.home}*/}
        </div>
        <img src={require('../../static/images/webpack.jpeg')} alt="logo"/>
        <button onClick={() => {
          this.setState({
            value: (this.state.value + 1)
          })
        }}>add
        </button>
        <Banner {...this.props} parentFn={this.parentFn.bind(this)} {...this.state}/>
      </div>
    )
  };

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

function mapStateToProps(state: any) {
  return {
    home: state.home,
    test: state.test
  }
}


function mapDispatchToProps(dispatch: any) {
  return {
    homeActions: bindActionCreators(homeActions, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

// export default Home
