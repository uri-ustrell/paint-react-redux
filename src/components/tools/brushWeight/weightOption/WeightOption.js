import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./WeightOption.css";

const WeightOption = ({ weight, isSelected, handleClick }) => (
	<div onClick={handleClick} className="paint-brush-weightOption tool-btn">
		<div
			className="paint-weightOption-line"
			style={{ height: weight }}
		></div>
		{isSelected && <Icon icon={faCheck} />}
	</div>
);

export default WeightOption;
