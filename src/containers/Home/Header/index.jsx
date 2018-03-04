import React from 'react';
import ReactDOM from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Header extends React.Component<Props, State> {

  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div>
        Header 
        <h1>{this.props.value}</h1>
				{console.log(this.props) }
				{/*<button onClick={this.props.changeParentData}>click</button>*/}
      </div>
    );
  }

  changeProps(){
  	console.log(1)
  }
}

export default Header;