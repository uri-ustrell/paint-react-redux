import React from "react";
import { shallow } from "enzyme";
import Palette from "./Palette";
import Color from "./color/Color";

describe("Palette component", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Palette />);
	});

	it("must exists", () => {
		expect(wrapper.find("div.paint-palette").length).toBe(1);
	});

	it("should render correctly", () => {
		expect(wrapper).toMatchSnapshot();
	});

	it("should render colors", () => {
		expect(wrapper.containsMatchingElement(<Color />));
	});
});
