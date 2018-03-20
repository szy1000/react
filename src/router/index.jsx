import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Link } from "react-router-dom";

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

const BasicExample = () => (
  <HashRouter>
    <div>
      <ul className="links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
      </ul>

      <hr />

      {/*<Route path="/:id" component={Child} />
      <Route
        path="/order/:direction(asc|desc)"
        component={ComponentWithRegex}
      />*/}


      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/news" component={News} />
    </div>
  </HashRouter>
);


export default BasicExample;