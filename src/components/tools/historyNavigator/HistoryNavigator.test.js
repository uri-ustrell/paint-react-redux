import React from "react";
import { shallow, mount } from "enzyme";
import HistoryNavigator from "./HistoryNavigator";
import StepMove from "./stepMove/StepMove";

describe("HistoryNavigator component", () => {
	let wrapper;

	beforeEach(() => (wrapper = shallow(<HistoryNavigator />)));

	it("must exists", () => {
		expect(wrapper.find("div.paint-historyNavigator").length).toBe(1);
	});

	it("shuold render correctly", () => {
		expect(wrapper).toMatchSnapshot();
	});

	it("should render 2 <StepMove /> components", () => {
		const wrapper = mount(<HistoryNavigator />);

		expect(wrapper.containsMatchingElement(<StepMove />)).toEqual(true);
		expect(wrapper.find("div.paint-history-stepMove").length).toBe(2);
	});
});
