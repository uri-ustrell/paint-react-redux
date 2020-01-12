export const saveLines = lines => ({
	type: "SAVE_CANVAS_LINES",
	lines: lines
});

export const loadLines = () => ({
	type: "LOAD_CANVAS_LINES",
	lines: []
});
