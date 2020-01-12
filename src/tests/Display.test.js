import React from "react";
import { shallow } from "enzyme";
import Display from "../components/display/Display";
import Canvas from "../components/display/canvas/Canvas";

describe("Display component", () => {
	let wrapper;

	beforeEach(() => (wrapper = shallow(<Display />)));

	it("must exists", () => {
		expect(wrapper.find("div.paint-display").length).toBe(1);
	});

	it("should render correctly", () => {
		expect(wrapper).toMatchSnapshot();
	});

	it("should render <Canvas /> component", () => {
		expect(wrapper.containsMatchingElement(<Canvas />)).toEqual(true);
	});
});
