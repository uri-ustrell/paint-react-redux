import * as types from "./actionTypes";

export const loadPaletteColors = colors => ({
	type: types.LOAD_PALETTE_COLORS,
	colors
});

export const selectPaletteColor = selectedColor => ({
	type: types.SELECT_PALETTE_COLOR,
	selectedColor
});
