import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Tools from "./tools/Tools";
import Display from "./display/Display";

describe("App", () => {
	let wrapper;

	beforeEach(() => (wrapper = shallow(<App />)));

	it("should render correctly", () => {
		expect(wrapper).toMatchSnapshot();
	});

	it("must exists", () => {
		expect(wrapper.find("div.app-container").length).toBe(1);
	});


	it("should contain <Tools /> and <Display /> component", () => {
		expect(wrapper.containsMatchingElement(<Tools />)).toBe(true);
		expect(wrapper.containsMatchingElement(<Display />)).toBe(true);
	});
});
