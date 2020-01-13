import initialState from "./initialState";
import * as types from "../actions/actionTypes";

export default function canvasReducer(state = initialState.canvas, action) {
	const historyPast = state.history.past,
		historyFuture = state.history.future;
	let futureLines, pastLines;
	switch (action.type) {
		case types.LOAD_CANVAS_LINES:
			return state;
		case types.SAVE_CANVAS_LINES:
			pastLines = [...action.lines];
			futureLines = [];

			return {
				...state,
				lines: action.lines,
				history: {
					...state.history,
					past: { ...historyPast, lines: pastLines },
					future: { ...historyFuture, lines: futureLines }
				}
			};
		case types.HISTORY_CANVAS_STEPS_BACK:
			if (historyPast.lines.length === 0) return state;
			pastLines = state.lines.filter(
				(_, i, ls) => i < ls.length - action.steps
			);
			futureLines = [
				...historyPast.lines.filter(
					(_, i, ls) => i >= ls.length - action.steps
				),
				...historyFuture.lines
			];

			return {
				...state,
				lines: pastLines,
				history: {
					...state.history,
					past: { ...historyPast, lines: pastLines },
					future: { ...historyFuture, lines: futureLines }
				}
			};
		case types.HISTORY_CANVAS_STEPS_FORWARD:
			if (historyFuture.lines.length === 0) return state;
			pastLines = [
				...historyPast.lines,
				...historyFuture.lines.filter((_, i) => i < action.steps)
			];
			futureLines = historyFuture.lines.filter(
				(_, i) => i > action.steps - 1
			);

			return {
				...state,
				lines: pastLines,
				history: {
					...state.history,
					past: { ...historyPast, lines: pastLines },
					future: { ...historyFuture, lines: futureLines }
				}
			};
		default:
			return state;
	}
}
