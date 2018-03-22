import React from 'react';
import ReactDOM from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { BrowserRouter as Router, HashRouter, Route, Link } from "react-router-dom";

import App from '../containers/index.jsx';
import Home from '../containers/Home/index.jsx';
import About from '../containers/About/index.jsx';
import News from '../containers/News/index.jsx';

const Child = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
);

const ComponentWithRegex = ({ match }) => (
  <div>
    <h3>Only asc/desc are allowed: {match.params.direction}</h3>
  </div>
);
// HashRouter 可以记住路由

class BasicExample extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      selectIndex: 0
    };
    this.linksMap = [
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
  }

  render(){
    return (
      <HashRouter>
        <div>
          <ul className="links">
            {
              this.linksMap.map((item,index) => {
                return <li key={index} className={ index === this.state.selectIndex? 'active': ''} onClick={()=>{
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
            <Route index path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/news/:id" component={News} />
          </App>
        </div>
      </HashRouter>
    )
  }
}

export default BasicExample;