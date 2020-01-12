import React from "react";
import { shallow } from "enzyme";
import Color from "./Color";

describe("Color component", () => {
	let wrapper;

	beforeEach(() => (wrapper = shallow(<Color />)));

	it("must exist", () => {
		expect(wrapper.find("div.paint-palette-color").length).toBe(1);
	});

	it("should render correctly", () => {
		expect(wrapper).toMatchSnapshot();
	});
});
