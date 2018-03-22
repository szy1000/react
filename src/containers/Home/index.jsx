import React from 'react';
import ReactDOM from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as homeActions from '../../redux/actions/home.jsx'

import Banner from './Banner/index.js';
import Header from './Header/index.jsx';

class Home extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.parentData = 55
    this.state = {
      value: 5,
      sentence: 'this value was tranform by parent!!!'
    }
  }

  render() {
    console.log(this.props)
    return (
      <div id="home">
        <img src={require('../../static/images/webpack.jpeg')} alt="logo"/>
        <button onClick={()=>{
          this.setState({
            value: (this.state.value + 1)
          })
        }}>add</button>
        <div>
          地址：{this.props.home && this.props.home.address}  
          电话：{this.props.home && this.props.home.tel } 
        </div>
        <Header test={this.parentData} {...this.props} {...this.state}/>
        <Banner {...this.props} parentFn={this.parentFn.bind(this)} {...this.state}/>
      </div>
    );
  }

  componentDidMount(){
    this.props.homeActions.homeUpdate({
      home: { address:'initData',tel: '13900000000' }
    })
  }

  parentFn(){
    this.setState({
      value: (this.state.value - 1)
    })
  }
  
  changeParentData(){
    this.setState({
      sentence: 'has\'t changed'
    })
  }
}

function mapStateToProps(state){
  return {
    home: state.home,
  }
}


function mapDispatchToProps(dispatch){
  return {
    homeActions: bindActionCreators(homeActions, dispatch)
  }
}
// export default Home;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);