export const saveLines = lines => ({
	type: "SAVE_CANVAS_LINES",
	lines: lines
});

export const loadLines = () => ({
	type: "LOAD_CANVAS_LINES",
	lines: []
});

export const canvasHistoryStepBack = () => ({
	type: "HISTORY_CANVAS_STEPS_BACK",
	steps: 1
});

export const canvasHistoryStepForward = () => ({
	type: "HISTORY_CANVAS_STEPS_FORWARD",
	steps: 1
});
