import { createStore } from 'redux';
import rootReducer from '../reducers/home.jsx'

export default function counter(initState) {
  const store = createStore(rootReducer,initState,
  	window.devToolsExtension ? window.devToolsExtension() : undefined
	)
	return store
}