import React from "react";
import { shallow } from "enzyme";
import Tools from "./Tools";
import Palette from "./palette/Palette";
import BrushWeight from "./brushWeight/BrushWeight";
import HistoryNavigator from "./historyNavigator/HistoryNavigator";

describe("Tools Component", () => {
	let wrapper;

	beforeEach(() => (wrapper = shallow(<Tools />)));

	it("must exists", () => {
		expect(wrapper.find("div.paint-tools").length).toBe(1);
	});

	it("should render correctly", () => {
		expect(wrapper).toMatchSnapshot();
	});

	it("should render <HistoryNavigator />, <Palette />, <BrushWeight /> components", () => {
		expect(wrapper.containsMatchingElement(<HistoryNavigator />)).toEqual(
			true
		);
		expect(wrapper.containsMatchingElement(<Palette />)).toEqual(true);
		expect(wrapper.containsMatchingElement(<BrushWeight />)).toEqual(true);
	});
});
