const initState = {};

export default function home(state=initState, action){
	switch (action.type) {
		case "TEST_UPDATE":
			// return Object.assign({},state,action.data)
			return action.data 
		default:
			return state
	}
}