import { combineReducers } from "redux";
import brush from "./brushReducer";
import palette from "./paletteReducer";
import canvas from "./canvasReducer";
import weights from "./weightsReducer";

const rootReducer = combineReducers({
	brush,
	palette,
	canvas,
	weights
});

export default rootReducer;
