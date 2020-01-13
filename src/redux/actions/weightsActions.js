import * as types from "./actionTypes";

export const selectWeight = selectedWeight => ({
	type: types.SELECT_WEIGHT,
	selectedWeight
});

export const loadWeights = () => ({
	type: types.LOAD_WEIGHTS,
	weights: []
});
