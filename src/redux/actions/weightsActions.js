export const selectWeight = selectedWeight => ({
	type: "SELECT_WEIGHT",
	selectedWeight
});

export const loadWeights = () => ({
	type: "LOAD_WEIGHTS",
	weights: []
});
