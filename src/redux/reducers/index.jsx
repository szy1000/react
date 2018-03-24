import { combineReducers} from 'redux';

import home from './home.jsx';
import test from './test.jsx';

const rootReducer = combineReducers({
	home,
	test
})

export default rootReducer;