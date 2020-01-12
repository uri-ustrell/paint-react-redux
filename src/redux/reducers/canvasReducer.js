import initialState from "./initialState";

export default function canvasReducer(state = initialState.canvas, action) {
	switch (action.type) {
		case "LOAD_CANVAS_LINES":
			return state;
		case "SAVE_CANVAS_LINES":
			return { ...state, lines: action.lines };
		default:
			return state;
	}
}
