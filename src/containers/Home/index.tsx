import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Header from './Header/index';
import Category from './Category/index.jsx';
import Discount from './Discount/index';
import Guess from './Guess/index';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as homeActions from '../../redux/actions/home.jsx'

export interface Props {
  home?: Object,
  homeActions: any
}

export interface State {
  value: number,
  sentence?: string,
  home: any,
}

function mapStateToProps(state: any) {
  return {
    home: state.home,
  }
}


function mapDispatchToProps(dispatch: any) {
  return {
    homeActions: bindActionCreators(homeActions, dispatch),
  }
}

// @connect(
//   state =>  state.home,
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
        <Guess/>
      </div>
    )
  };

  componentDidMount() {
    this.props.homeActions.homeUpdate({
      address: 'initData',
      tel: '139'
    })
  }
}

// function mapStateToProps(state: any) {
//   return {
//     home: state.home,
//     test: state.test
//   }
// }
//
//
// function mapDispatchToProps(dispatch: any) {
//   return {
//     homeActions: bindActionCreators(homeActions, dispatch),
//   }
// }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

// export default Home
