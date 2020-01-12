import React, { Component } from "react";
import { connect } from "react-redux";
// eslint-disable-next-line
import { render } from "react-dom";
import PropTypes from "prop-types";
import { Stage, Layer, Line } from "react-konva";
import { saveLines, loadLines } from "../../../redux/actions/canvasActions";

import "./Canvas.css";

class Canvas extends Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	state = {
		lines: this.props.lines || [],
		isDrawing: false
	};

	componentDidMount() {
		this.stage = this.stageRef.getStage();
		this.stage.setContainer("stage-parent");
		loadLines();
	}

	handleMouseDown = () => {
		//this.props.loadLines();
		// add line
		this.setState({
			lines: [...this.props.lines, {}],
			isDrawing: true
		});
	};

	handleMouseMove = e => {
		// no drawing - skipping
		if (!this.state.isDrawing) {
			return;
		}

		const point = this.stage.getPointerPosition();
		const { lines } = this.state;

		let lastLine = lines[lines.length - 1];

		// add point
		lastLine.points = lastLine.points
			? [...lastLine.points, point.x, point.y]
			: [point.x, point.y];
		lastLine.color = this.props.brushColor;

		// replace last
		const newLines = lines.map(
			(line, i) => (i === lines.length - 1 && lastLine) || line
		);

		this.setState({
			lines: newLines
		});
	};

	handleMouseUp = () => {
		this.props.saveLines(this.state.lines);

		this.setState({
			isDrawing: false
		});
	};

	render() {
		return (
			<Stage
				width={window.innerWidth * 0.75}
				height={window.innerHeight * 0.9}
				onContentMousedown={this.handleMouseDown}
				onContentMousemove={this.handleMouseMove}
				onContentMouseup={this.handleMouseUp}
				ref={node => {
					this.stageRef = node;
				}}
			>
				<Layer>
					{this.state.lines.map((line, i) => (
						<Line
							key={i}
							points={line.points}
							stroke={line.color}
						/>
					))}
				</Layer>
			</Stage>
		);
	}
}

Canvas.propTypes = {
	brushColor: PropTypes.string.isRequired,
	lines: PropTypes.array.isRequired
};

const mapStateToProps = (state /*, ownProps */) => {
	console.log("Canvas", state);
	return {
		brushColor: state.brush.color,
		lines: state.canvas.lines
	};
};

const mapDispatchToProps = {
	saveLines,
	loadLines
};

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);
