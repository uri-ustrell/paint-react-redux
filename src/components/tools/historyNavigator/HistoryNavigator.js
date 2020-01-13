import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faUndoAlt, faRedoAlt } from "@fortawesome/free-solid-svg-icons";
import StepMove from "./stepMove/StepMove";
import {
	canvasHistoryStepBack,
	canvasHistoryStepForward
} from "../../../redux/actions/canvasActions";
import "./HistoryNavigator.css";

export const HistoryNavigator = ({
	canvasHistoryStepBack,
	canvasHistoryStepForward
}) => (
	<div className="paint-historyNavigator">
		<StepMove
			handleClick={canvasHistoryStepBack}
			icon={<Icon icon={faUndoAlt} size="2x" />}
		/>
		<StepMove
			handleClick={canvasHistoryStepForward}
			icon={<Icon icon={faRedoAlt} size="2x" />}
		/>
	</div>
);

HistoryNavigator.propTypes = {
	canvasHistoryStepBack: PropTypes.func.isRequired,
	canvasHistoryStepForward: PropTypes.func.isRequired
};

const mapStateToProps = (state /*, ownProps */) => ({});

const mapDispatchToProps = {
	canvasHistoryStepBack,
	canvasHistoryStepForward
};

export default connect(mapStateToProps, mapDispatchToProps)(HistoryNavigator);
