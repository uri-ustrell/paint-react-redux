import React from "react";
import { shallow } from "enzyme";
import BrushWeight from "./BrushWeight";

describe("BrushWeight component", () => {
	let wrapper;

	beforeEach(() => (wrapper = shallow(<BrushWeight />)));

	it("must exists", () => {
		expect(wrapper.find("div.paint-brushWeight").length).toBe(1);
	});
});
