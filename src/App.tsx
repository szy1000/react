import 'core-js/es6/map';
import 'core-js/es6/set';
import 'core-js/es6/symbol';
import 'core-js/es6/promise';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// import fn from './containers/redux-demo.jsx'

import configureStore from './redux/store/configureStore.jsx';

import RouterMap from './Router/index';

import './static/css/iconfont.scss'
import './static/css/style.scss'

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
  	<RouterMap/>
  </Provider>,
	document.getElementById('app')
);