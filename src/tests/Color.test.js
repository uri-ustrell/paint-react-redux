import React from "react";
import { shallow, mount } from "enzyme";
import Color from "../components/tools/palette/color/Color";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

describe("Color component", () => {
	let wrapper;

	describe("initially", () => {
		beforeEach(() => (wrapper = shallow(<Color />)));

		it("must exist", () => {
			expect(wrapper.find("div.paint-palette-color").length).toBe(1);
		});

		it("should render correctly", () => {
			expect(wrapper).toMatchSnapshot();
		});
	});

	describe("mounted", () => {
		it("should show check if it is Selected", () => {
			wrapper = mount(<Color isSelected={true} />);

			expect(wrapper.containsMatchingElement(<Icon />)).toBe(true);
		});

		it("should show check if it is Clicked", () => {
			const onClick = jest.fn(() =>
				wrapper.setProps({ isSelected: true })
			);
			wrapper = mount(
				<Color isSelected={false} handleOnClick={onClick} />
			);

			wrapper.simulate("click");

			expect(wrapper.containsMatchingElement(<Icon />)).toBe(true);
		});
	});
});
