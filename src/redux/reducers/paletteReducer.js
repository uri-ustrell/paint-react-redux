import initialState from "./initialState";

export default function paletteReducer(state = initialState.palette, action) {
	switch (action.type) {
		case "SELECT_PALETTE_COLOR":
			return { ...state, selectedColor: action.selectedColor };
		case "LOAD_PALETTE_COLORS":
			return { ...state, colors: [...state.colors, ...action.colors] };
		default:
			return state;
	}
}
