import { createStore } from 'redux';
import rootReducer from '../reducers/index.jsx'

export default function counter(initState) {
  const store = createStore(rootReducer,initState,
  	window.devToolsExtension ? window.devToolsExtension() : undefined
	)
	return store
}