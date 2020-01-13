import initialState from "./initialState";
import * as types from "../actions/actionTypes";

export default function paletteReducer(state = initialState.palette, action) {
	switch (action.type) {
		case types.SELECT_PALETTE_COLOR:
			return { ...state, selectedColor: action.selectedColor };
		case types.LOAD_PALETTE_COLORS:
			return { ...state, colors: [...state.colors, ...action.colors] };
		default:
			return state;
	}
}
