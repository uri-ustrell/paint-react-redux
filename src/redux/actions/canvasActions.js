import * as types from "./actionTypes";

export const saveLines = lines => ({
	type: types.SAVE_CANVAS_LINES,
	lines: lines
});

export const loadLines = () => ({
	type: types.LOAD_CANVAS_LINES,
	lines: []
});

export const canvasHistoryStepBack = () => ({
	type: types.HISTORY_CANVAS_STEPS_BACK,
	steps: 1
});

export const canvasHistoryStepForward = () => ({
	type: types.HISTORY_CANVAS_STEPS_FORWARD,
	steps: 1
});
