import initialState from "./initialState";
import * as types from "../actions/actionTypes";

export default function brushReducer(state = initialState.brush, action) {
	switch (action.type) {
		case types.SELECT_BRUSH_COLOR:
			return { ...state, color: action.selectedColor };
		case types.SELECT_BRUSH_WEIGHT:
			return { ...state, weight: action.selectedWeight };
		default:
			return state;
	}
}
