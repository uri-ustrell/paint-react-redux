import * as types from "../redux/actions/actionTypes";
import * as brushActions from "../redux/actions/brushActions";

describe("selectBrushColor()", () => {
	it("should trigger SELECT_BRUSH_COLOR action", () => {
		const selectedColor = {};
		const expectedAction = {
			type: types.SELECT_BRUSH_COLOR,
			selectedColor
		};

		const action = brushActions.selectBrushColor(selectedColor);

		expect(action).toEqual(expectedAction);
	});
});
