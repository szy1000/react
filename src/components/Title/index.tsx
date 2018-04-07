import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.scss';

export interface Props {
  title: string
}

export interface State {
  title: string
}

class Title extends React.Component<Props, State> {

  constructor(props: any, context: any) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div id="title">
        <div className="brand">
          <img src={require('./images/brand.png')} alt="brand"/>
          <p>{this.props.title}</p>
        </div>
        <div className="more">
          <a href="###">更多 <img src={require('./images/more.png')}/></a>
        </div>
      </div>
    );
  }
}

export default Title;
