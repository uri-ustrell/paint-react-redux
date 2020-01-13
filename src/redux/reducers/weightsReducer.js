import initialState from "./initialState";

export default function weightsReducer(state = initialState.weights, action) {
	switch (action.type) {
		case "LOAD_WEIGHTS":
			return { ...state, all: [...state.all, ...action.weights] };
		case "SELECT_WEIGHT":
			return { ...state, selectedWeight: action.selectedWeight };
		default:
			return state;
	}
}
