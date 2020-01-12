import React from "react";
import { shallow } from "enzyme";
import WeightOption from "../components/tools/brushWeight/weightOption/WeightOption";

describe("WeightOption component", () => {
	let wrapper;

	beforeEach(() => (wrapper = shallow(<WeightOption />)));

	it("must exists", () => {
		expect(wrapper.find("div.paint-brush-weightOption").length).toBe(1);
	});

	it("should render correctly", () => {
		expect(wrapper).toMatchSnapshot();
	});
});
