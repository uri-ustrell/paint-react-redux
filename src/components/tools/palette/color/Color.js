import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./Color.css";

const Color = ({ color, isSelected, handleOnClick }) => (
	<div
		className="paint-palette-color tool-btn"
		style={{ backgroundColor: color, color: "white" }}
		onClick={handleOnClick}
	>
		{isSelected && <Icon icon={faCheck} />}
	</div>
);

export default Color;
