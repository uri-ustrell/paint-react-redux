import React from "react";
import "./StepMove.css";

const StepMove = ({ handleClick, icon }) => (
	<div className="paint-history-stepMove tool-btn" onClick={handleClick}>
		{icon}
	</div>
);

export default StepMove;
