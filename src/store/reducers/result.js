import * as actionTypes from '../actions/actionTypes'

const initialState = {
	results: []
}

const reducer = (state = initialState, action) => {
	switch ( action.type) {
		case actionTypes.STORE_RESULT :
		// Change data
			return {
				...state,
				results: state.results.concat({ id: new Date(), value: action.result * 2 })
			}
		case actionTypes.DELETE_RESULT :
		// immutable way 
		// const id = 2
		// const newArray = [...state.results]
		// newArray.splice(id, 1)
		const updateArray = state.results.filter( result => result.id !== action.resultElId)
			return {
				...state,
				results: updateArray
			}	
	}
	return state
}

