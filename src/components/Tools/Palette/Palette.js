import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Color from "./color/Color";
import { selectBrushColor } from "../../../redux/actions/brushActions";
import {
	selectPaletteColor,
	loadPaletteColors
} from "../../../redux/actions/paletteActions";
import "./Palette.css";

const Palette = ({
	selectedColor,
	colors,
	selectBrushColor,
	selectPaletteColor,
	loadPaletteColors
}) => {
	useEffect(() => {
		if (colors.length === 0) loadPaletteColors([]);
		if (Object.entries(selectedColor).length === 0)
			selectColor({ id: 8000, hex: "#008000" });
	});

	const selectColor = color => {
		console.log("I selected a color");
		selectPaletteColor(color);
		selectBrushColor(color.hex);
	};

	return (
		<div className="paint-palette">
			{colors.map(color => (
				<Color
					key={color.id}
					color={color.hex}
					isSelected={color.id === selectedColor.id}
					handleOnClick={() => selectColor(color)}
				/>
			))}
		</div>
	);
};

Palette.propTypes = {
	selectedColor: PropTypes.object.isRequired,
	colors: PropTypes.array.isRequired,
	selectBrushColor: PropTypes.func.isRequired,
	selectPaletteColor: PropTypes.func.isRequired,
	loadPaletteColors: PropTypes.func.isRequired
};

const mapStateToProps = (state /*, ownProps */) => ({
	selectedColor: state.palette.selectedColor,
	colors: state.palette.colors
});

const mapDispatchToProps = {
	selectBrushColor,
	selectPaletteColor,
	loadPaletteColors
};

export default connect(mapStateToProps, mapDispatchToProps)(Palette);
