import React from "react";
import WeightOption from "./weightOption/WeightOption";
import "./BrushWeight.css";

const BrushWeight = () => (
	<div className="paint-brushWeight">
		{[...Array(4)].map((_, i) => (
			<WeightOption key={i} />
		))}
	</div>
);

export default BrushWeight;
