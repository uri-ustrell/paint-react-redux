import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Tools from "./tools/Tools";

describe("App", () => {
	let wrapper;

	beforeEach(() => (wrapper = shallow(<App />)));

	it("should render correctly", () => {
		expect(wrapper).toMatchSnapshot();
	});

	it("must exists", () => {
		expect(wrapper.find("div.app-container").length).toBe(1);
	});


	it("should contain <Tools /> component", () => {
		expect(wrapper.containsMatchingElement(<Tools />)).toBe(true);
	});
});
