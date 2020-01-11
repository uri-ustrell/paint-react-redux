import React from "react";
import Canvas from "./canvas/Canvas";
import "./Display.css";

const Display = () => (
	<div className="paint-display">
		<div id="stage-parent">
			<Canvas />
		</div>
	</div>
);

export default Display;
