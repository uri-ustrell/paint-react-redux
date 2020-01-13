import React from "react";
import { shallow, mount } from "enzyme";
import { BrushWeight } from "../components/tools/brushWeight/BrushWeight";
import WeightOption from "../components/tools/brushWeight/weightOption/WeightOption";
import initialState from "../redux/reducers/initialState";

describe("BrushWeight component", () => {
	let wrapper;
	const defaultProps = {
		weights: initialState.weights.all,
		selectedWeight: initialState.weights.selectedWeight,
		selectWeight: jest.fn(),
		loadWeights: jest.fn(),
		selectBrushWeight: jest.fn()
	};

	const _render = args => {
		const props = { ...defaultProps, ...args };
		return mount(<BrushWeight {...props} />);
	};

	beforeEach(() => (wrapper = shallow(<BrushWeight {...defaultProps} />)));

	it("must exists", () => {
		expect(wrapper.find("div.paint-brushWeight").length).toBe(1);
	});

	it("shuold render correctly", () => {
		expect(wrapper).toMatchSnapshot();
	});

	it("should render exclusively <WeightOption /> components", () => {
		expect(wrapper.containsAllMatchingElements([<WeightOption />])).toBe(
			true
		);
	});

	describe("mounted", () => {
		it("should initialize with one selected weight", () => {
			wrapper = _render();

			expect(wrapper.find("[data-icon='check']").length).toBe(1);
		});

		it("should load weights if weights array is empty", () => {
			wrapper = _render({ weights: [] });
			const { loadWeights } = wrapper.props();

			jest.spyOn(React, "useEffect").mockImplementation(f => f());

			expect(loadWeights).toHaveBeenCalled();
		});

		it("should call selectWeight() & selectBrushWeight() methods on weight click", () => {
			wrapper = _render();
			const { selectWeight, selectBrushWeight } = wrapper.props();

			wrapper
				.find(WeightOption)
				.at(0)
				.simulate("click");

			expect(selectWeight).toHaveBeenCalled();
			expect(selectBrushWeight).toHaveBeenCalled();
		});
	});
});
