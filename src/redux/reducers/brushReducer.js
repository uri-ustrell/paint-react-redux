import initialState from "./initialState";

export default function brushReducer(state = initialState.brush, action) {
	switch (action.type) {
		case "SELECT_BRUSH_COLOR":
			return { ...state, color: action.selectedColor };
		case "SELECT_BRUSH_WEIGHT":
			return { ...state, weight: action.selectedWeight };
		default:
			return state;
	}
}
