import React, { useEffect } from "react";
import WeightOption from "./weightOption/WeightOption";
import PropTypes from "prop-types";
import {
	selectWeight,
	loadWeights
} from "../../../redux/actions/weightsActions";
import { selectBrushWeight } from "../../../redux/actions/brushActions";
import { connect } from "react-redux";
import "./BrushWeight.css";

export const BrushWeight = ({
	weights,
	selectWeight,
	selectedWeight,
	selectBrushWeight,
	loadWeights
}) => {
	useEffect(() => {
		if (weights.length === 0) loadWeights();
	});

	const handleSelectWeight = weight => {
		selectWeight(weight);
		selectBrushWeight(weight);
	};

	return (
		<div className="paint-brushWeight">
			{weights.map((wg, i) => (
				<WeightOption
					key={i}
					weight={wg}
					isSelected={wg === selectedWeight}
					handleClick={() => handleSelectWeight(wg)}
				/>
			))}
		</div>
	);
};

BrushWeight.propTypes = {
	weights: PropTypes.array.isRequired,
	selectedWeight: PropTypes.number.isRequired,
	selectWeight: PropTypes.func.isRequired,
	selectBrushWeight: PropTypes.func.isRequired,
	loadWeights: PropTypes.func.isRequired
};

const mapStateToProps = (state /* , ownProps */) => ({
	weights: state.weights.all,
	selectedWeight: state.weights.selectedWeight
});

const mapDsipatchToProps = { selectWeight, loadWeights, selectBrushWeight };

export default connect(mapStateToProps, mapDsipatchToProps)(BrushWeight);
