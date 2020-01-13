import React from "react";
import { Canvas } from "../components/display/canvas/Canvas";
import { cleanup, render } from "@testing-library/react";

describe("Canvas component", () => {
	const defaultProps = {
		brushColor: "",
		lines: [],
		saveLines: jest.fn(),
		loadLines: jest.fn()
	};

	beforeEach(() => {
		cleanup();
	});

	it("must exists", () => {
		const { container } = render(
			<div id="stage-parent">
				<Canvas {...defaultProps} />
			</div>
		);
		expect(container.querySelectorAll(".konvajs-content")).toHaveLength(1);
		expect(container.querySelectorAll("canvas")).toHaveLength(1);
	});
});
