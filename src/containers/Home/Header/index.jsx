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
    return (
      <div id="Home_header">
        <p><i className="iconfont icon-search"></i></p>
        <h1>{this.props.sentence}</h1>
      </div>
    );
  }
}

export default Header;