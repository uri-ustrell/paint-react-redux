import React from "react";
import { Canvas } from "../components/display/canvas/Canvas";
import { cleanup, render } from "@testing-library/react";
import initialState from "../redux/reducers/initialState";

describe("Canvas component", () => {
	const defaultProps = {
		brushColor: initialState.brush.color,
		lines: initialState.canvas.lines,
		brushWeight: initialState.brush.weight,
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
