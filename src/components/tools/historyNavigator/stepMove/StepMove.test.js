import React from "react";
import { shallow } from "enzyme";
import StepMove from "./StepMove";

describe("StepMove component", () => {
	let wrapper;

	beforeEach(() => (wrapper = shallow(<StepMove />)));

	it("must exists", () => {
		expect(wrapper.find("div.paint-history-stepMove").length).toBe(1);
	});
});
