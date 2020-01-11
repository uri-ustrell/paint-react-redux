import React from "react";
import Canvas from "./Canvas";
import { cleanup, render } from "@testing-library/react";

describe("Canvas component", () => {
	beforeEach(() => {
		cleanup();
	});

	it("must exists", () => {
		const { container } = render(
			<div id="stage-parent">
				<Canvas />
			</div>
		);
		expect(container.querySelectorAll(".konvajs-content")).toHaveLength(1);
		expect(container.querySelectorAll("canvas")).toHaveLength(1);
	});
});
