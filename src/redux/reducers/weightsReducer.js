import initialState from "./initialState";
import * as types from "../actions/actionTypes";

export default function weightsReducer(state = initialState.weights, action) {
	switch (action.type) {
		case types.LOAD_WEIGHTS:
			return { ...state, all: [...state.all, ...action.weights] };
		case types.SELECT_WEIGHT:
			return { ...state, selectedWeight: action.selectedWeight };
		default:
			return state;
	}
}
