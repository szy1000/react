import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export interface Props {

}

export interface State {

}

class Header extends React.Component<Props, State> {

  constructor(props: any, context: any) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div>
        header
      </div>
    );
  }
}

export default Header;