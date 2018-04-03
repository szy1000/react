// import React from 'react';
// import ReactDOM from 'react-dom';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
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