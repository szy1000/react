import * as React from 'react';
import * as PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.scss';

export interface Props{
  sentence?: string,
  cityName: string
}

export interface State{

}

class Header extends React.Component<Props, State> {

  constructor(props:any, context:any) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div id="Home_header">
        <div className="place">{this.props.cityName}<i className="iconfont icon-angle-down"/></div>
        <div className="search"><i className="iconfont icon-search"/><input type="text" placeholder="请输入关键字"/></div>
        <div className="user"><i className="iconfont icon-user"/></div>
      </div>
    );
  }
}

export default Header;