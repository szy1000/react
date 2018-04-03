import * as React from 'react';
import { HashRouter, Route, Link } from "react-router-dom";

import App from '../containers/index.jsx';
import Home from '../containers/Home/index.jsx';
// import About from '../containers/About/index.jsx';
// import News from '../containers/News/index.jsx';

// HashRouter 可以记住路由

export interface Props {
}

export interface State {
  selectIndex: number,
  linksMap: any
}

class BasicExample extends React.Component<Props, State> {
  constructor(props: any, state: any) {
    super(props, state)
    this.state = {
      selectIndex: 0,
      linksMap: [
        {
          name: 'Home',
          path: '/home'
        },
        {
          name: 'About',
          path: '/about'
        },
        {
          name: 'News',
          path: '/news/0'
        }
      ]
    };
  }

  render() {
    return (
      <HashRouter>
        <div>
          <ul className="links">
            {
              this.state.linksMap.map((item:any, index:any) => {
                return <li key={index} className={index === this.state.selectIndex ? 'active' : ''} onClick={() => {
                  this.setState({
                    selectIndex: index
                  })
                }}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              })
            }
          </ul>
          <App>
            <Route index path="/home" component={Home}/>

          </App>
        </div>
      </HashRouter>
    )
  }
}

export default BasicExample;