import React from 'react';
import ReactDOM from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Banner from './Banner/index.jsx';
import Header from './Header/index.jsx';

class Home extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.parentData = 55
    this.state = {
      value: 5,
      sentence: 'this value was tranform by parent'
    }
  }

  render() {
    // todo 如何让当前的URL高亮显示
    console.log(this.props.match.params);
    return (
      <div id="home">
        <img src={require('../../static/images/webpack.jpeg')} alt="logo"/>
        <button onClick={()=>{
          this.setState({
            value: (this.state.value + 1)
          })
        }}>add</button>
        <Header test={this.parentData} {...this.props} {...this.state}/>
        <Banner {...this.props} parentFn={this.parentFn.bind(this)} {...this.state}/>
      </div>
    );
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

  show(){
    console.log('1');
  }
}

export default Home;