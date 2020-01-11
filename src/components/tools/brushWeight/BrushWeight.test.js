import React from "react";
import { shallow } from "enzyme";
import BrushWeight from "./BrushWeight";
import WeightOption from "./weightOption/WeightOption";

describe("BrushWeight component", () => {
	let wrapper;

	beforeEach(() => (wrapper = shallow(<BrushWeight />)));

	it("must exists", () => {
		expect(wrapper.find("div.paint-brushWeight").length).toBe(1);
	});

	it("shuold render correctly", () => {
		expect(wrapper).toMatchSnapshot();
	});

	it("should render 4 <WeightOption /> components", () => {
		expect(wrapper.find(WeightOption).length).toBe(4);
	});
});
