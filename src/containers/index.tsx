import * as React from 'react';

// import PureRenderMixin from 'react-addons-pure-render-mixin';

export interface Props {
}

export interface State {
  initDone: boolean
}


class App extends React.Component<Props, State> {

  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      initDone: true
    }
  }

  render() {
    return (
      <div>
        {this.state.initDone ? this.props.children : '<div>正在加载...</div>'}
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