import React from "react";
import { shallow } from "enzyme";
import Tools from "./Tools";
import Palette from "./palette/Palette";

describe("Tools Component", () => {
	let wrapper;

	beforeEach(() => (wrapper = shallow(<Tools />)));

	it("must exists", () => {
		expect(wrapper.find("div.paint-tools").length).toBe(1);
	});

	it("should render correctly", () => {
		expect(wrapper).toMatchSnapshot();
	});

	it("should render <Palette /> component", () => {
		expect(wrapper.containsMatchingElement(<Palette />)).toEqual(true);
	});
});
