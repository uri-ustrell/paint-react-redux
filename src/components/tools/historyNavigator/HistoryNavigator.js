import React from "react";
import StepMove from "./stepMove/StepMove";
import "./HistoryNavigator.css";

const HistoryNavigator = () => (
	<div className="paint-historyNavigator">
		{[...Array(2)].map((_, i) => (
			<StepMove key={i} />
		))}
	</div>
);

export default HistoryNavigator;
			