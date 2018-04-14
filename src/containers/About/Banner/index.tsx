import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.scss';

export interface Props {
  value: number,
  parentFn: any
}

export interface State {

}

class Banner extends React.Component <Props, State> {

  constructor(props: any, context: any) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div id="banner">
        Banner
        <h1>{this.props.value}</h1>
        <button onClick={this.props.parentFn}> click</button>
      </div>
    );
  }


}

export default Banner;