import React from "react";
import Palette from "./palette/Palette";
import BrushWeight from "./brushWeight/BrushWeight";
import HistoryNavigator from "./historyNavigator/HistoryNavigator";
import "./Tools.css";

const Tools = () => (
	<div className="paint-tools">
		<HistoryNavigator />
		<Palette />
		<BrushWeight />
	</div>
);

export default Tools;
