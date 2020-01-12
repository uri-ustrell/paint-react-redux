import React from "react";
import "./Color.css";

const Color = ({ color, isSelected, handleOnClick }) => (
		<div
			className="paint-palette-color tool-btn"
			style={{ backgroundColor: color, color: "white" }}
			onClick={handleOnClick}
		>
			{isSelected && <span>+</span>}
		</div>
	);

export default Color;
