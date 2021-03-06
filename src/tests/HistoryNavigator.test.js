import React from "react";
import { shallow } from "enzyme";
import { HistoryNavigator } from "../components/tools/historyNavigator/HistoryNavigator";
import StepMove from "../components/tools/historyNavigator/stepMove/StepMove";

describe("HistoryNavigator component", () => {
	let wrapper;

	const defaultProps = {
		canvasHistoryStepBack: jest.fn(),
		canvasHistoryStepForward: jest.fn()
	};

	beforeEach(
		() => (wrapper = shallow(<HistoryNavigator {...defaultProps} />))
	);

	it("must exists", () => {
		expect(wrapper.find("div.paint-historyNavigator").length).toBe(1);
	});

	it("should render correctly", () => {
		expect(wrapper).toMatchSnapshot();
	});

	it("should render 2 <StepMove /> components", () => {
		expect(wrapper.find(StepMove).length).toBe(2);
	});
});
