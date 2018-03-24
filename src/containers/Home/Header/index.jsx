import React from 'react';
import ReactDOM from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.scss';

class Header extends React.Component<Props, State> {

  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    console.log(this.props.sentence)
    return (
      <div id="Home_header">
        <div className="place">南京<i className="iconfont icon-angle-down"/></div>
        <div className="search"><i className="iconfont icon-search"/><input type="text" placeholder="请输入关键字"/></div>
        <div className="user"><i className="iconfont icon-user"/></div>
      </div>
    );
  }
}

export default Header;