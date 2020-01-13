import React from "react";
import { shallow, mount } from "enzyme";
import { Palette } from "../components/tools/palette/Palette";
import Color from "../components/tools/palette/color/Color";
import initialState from "../redux/reducers/initialState";

describe("Palette component", () => {
	let wrapper;
	const defaultProps = {
		selectedColor: initialState.palette.selectedColor,
		colors: initialState.palette.colors,
		selectBrushColor: jest.fn(),
		selectPaletteColor: jest.fn(),
		loadPaletteColors: jest.fn()
	};

	const _render = args => {
		const props = { ...defaultProps, ...args };
		return mount(<Palette {...props} />);
	};

	describe("initially", () => {
		beforeEach(() => {
			wrapper = shallow(<Palette {...defaultProps} />);
		});

		it("must exists", () => {
			expect(wrapper.find("div.paint-palette").length).toBe(1);
		});

		it("should render correctly", () => {
			expect(wrapper).toMatchSnapshot();
		});

		it("should render colors", () => {
			expect(wrapper.containsAllMatchingElements([<Color />])).toBe(true);
		});
	});

	describe("mounted", () => {
		it("should initialize with one selected color", () => {
			wrapper = _render();
			expect(wrapper.find("[data-icon='check']").length).toBe(1);
		});

		it("should load colors if colors array is empty", () => {
			wrapper = _render({ colors: [] });

			jest.spyOn(React, "useEffect").mockImplementation(f => f());
			expect(defaultProps.loadPaletteColors).toHaveBeenCalled();
		});

		it("should call selectPaletteColor() & selectBrushColor() methods on color click", () => {
			wrapper = _render();

			wrapper
				.find(Color)
				.at(0)
				.simulate("click");

			expect(wrapper.props().selectBrushColor).toHaveBeenCalled();
			expect(wrapper.props().selectPaletteColor).toHaveBeenCalled();
		});
	});
});
