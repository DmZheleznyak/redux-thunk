import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
	results: []
}

const deleteResult = ( state, action ) => {
	const updateArray = state.results.filter( result => result.id !== action.resultElId)
	return updateObject( state, { results: updateArray })
}

const reducer = (state = initialState, action) => {
	switch ( action.type) {
		case actionTypes.STORE_RESULT :
		// Change data
		return updateObject( state, { results: state.results.concat({ id: new Date(), value: action.result * 2 }) } )
			// return {
			// 	...state,
			// 	results: state.results.concat({ id: new Date(), value: action.result * 2 })
			// }
		case actionTypes.DELETE_RESULT :
			return deleteResult(state, action)
		// immutable way 
		// const id = 2
		// const newArray = [...state.results]
		// newArray.splice(id, 1)
			// const updateArray = state.results.filter( result => result.id !== action.resultElId)
			// return updateObject(state, { results: updateArray })
			// return {
			// 	...state,
			// 	results: updateArray
			// }	
	}
	return state
}

export default reducer