import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as homeActions from '../../../redux/actions/home.jsx'

import './style.scss';

import axios from 'axios';
import {getAdDataReq} from '../../../fetch/home/home.jsx';

class Discount extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      data: []
    };
  }

  render() {
    return (
      <div id="Home_discount">
        <h2>超值特惠</h2>
        <div className="ad-container clearfix">
          {this.state.data.map((item, index) => {
            return <div key={index} className="ad-item222 float-left">
              <a href={item.link} target="_blank">
                <img src={item.img} alt={item.title}/>
                <h1>{item.title}</h1>
              </a>
            </div>
          })}
        </div>
      </div>
    );
  }

  componentDidMount() {
    axios.all([this.initData()]).then((res) => {
      console.log(this.state.data)
    })
  }

  initData() {
    const result = getAdDataReq('zhou', 28);
    return result.then((res) => {
      return res.json();
    }).then((json) => {
      if (json.length) {
        this.setState({
          data: json
        })
      }
    })
  }
}

function mapStateToProps(state){
  return {
    home: state.home,
    test: state.test
  }
}


function mapDispatchToProps(dispatch){
  return {
    homeActions: bindActionCreators(homeActions, dispatch),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discount);

