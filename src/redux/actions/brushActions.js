import * as types from "./actionTypes";

export const selectBrushColor = selectedColor => ({
	type: types.SELECT_BRUSH_COLOR,
	selectedColor
});

export const selectBrushWeight = selectedWeight => ({
	type: types.SELECT_BRUSH_WEIGHT,
	selectedWeight
});
