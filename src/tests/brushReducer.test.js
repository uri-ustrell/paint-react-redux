import brushReducer from "../redux/reducers/brushReducer";
import * as actions from "../redux/actions/brushActions";

describe("brushReducer", () => {
	it("should change the brush color when SELECT_BRUSH_COLOR action is passed", () => {
		const initialState = {
			color: "#1B2631",
			weight: 8
		};
		const selectedColor = "#EB984E";
		const action = actions.selectBrushColor(selectedColor);

		const newState = brushReducer(initialState, action);

		expect(newState.color).toBe("#EB984E");
	});
});
