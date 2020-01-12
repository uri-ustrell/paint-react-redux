import { combineReducers } from "redux";
import brush from "./brushReducer";
import palette from "./paletteReducer";
import canvas from "./canvasReducer";

const rootReducer = combineReducers({
	brush,
	palette,
	canvas
});

export default rootReducer;
