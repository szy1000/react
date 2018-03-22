import React from 'react';
import ReactDOM from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class App extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      initDone: false
    }
  }

  render() {
    console.log('init');
    return (
      <div>
        { this.state.initDone ? this.props.children : '<div>正在加载...</div>'}
      </div>
    );
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        initDone: true
      })
    }, 1000)
  }
}

export default App;