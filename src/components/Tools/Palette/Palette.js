import React from "react";
import Color from "./color/Color";
import "./Palette.css";

const Palette = () => (
	<div className="paint-palette">
		{[...Array(20)].map((_, i) => (
			<Color />
		))}
	</div>
);

export default Palette;
