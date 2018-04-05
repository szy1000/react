import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.scss';

export interface Props {

}

export interface State {

}

class About extends React.Component<Props, State> {
  constructor(props: any, context: any) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div id="about">
        <h1>About</h1>
      </div>
    );
  }
}

export default About;