import React from 'react';
import ReactDOM from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Banner from './Banner/index.jsx';
import Header from './Header/index.jsx';

class Home extends React.Component {

  parentData:55
  state : {
    value: 5,
    sentence: 'this value was tranform by parent'
  }

  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div id="home">
        <button onClick={()=>{
          // this.changeParentData();
          this.setState({
            value: (this.state.value + 1)
          })
        }}>add</button>
        <Header test={this.parentData} {...this.props} {...this.state} {...this.changeParentData}/>
        <Banner {...this.props} parentFn={this.parentFn.bind(this)} {...this.state}/>
      </div>
    );
  }
  componentWillMount(){
    this.parentData = 10
    this.setState({
      value: 5
    })
  }

  parentFn(){
    console.log(1)
    console.log(this)
    this.setState({
      value: (this.state.value - 1)
    })
  }

  componentDidMount(){
    // this.show();
  }
  changeParentData(){
    console.log(1)
    this.setState({
      sentence: 'has\'t changed'
    })
  }

  show(){
    console.log('1');
  }
}

export default Home;