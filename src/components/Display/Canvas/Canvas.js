import React, { Component } from "react";
import { render } from "react-dom";
import { Stage, Layer, Line } from "react-konva";
import "./Canvas.css";

class Canvas extends Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	componentDidMount() {
		this.stage = this.stageRef.getStage();
		this.stage.setContainer("stage-parent");
	}

	state = {
		lines: [],
		isDrawing: false
	};

	handleMouseDown = () => {
		// add line
		this.setState({
			lines: [...this.state.lines, []],
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
		lastLine = lastLine.concat([point.x, point.y]);

		// replace last
		lines.splice(lines.length - 1, 1, lastLine);
		this.setState({
			lines: lines.concat()
		});
	};

	handleMouseUp = () => {
		this.setState({
			isDrawing: false
		});
	};

	render() {
		return (
			<Stage
				width={700}
				height={700}
				onContentMousedown={this.handleMouseDown}
				onContentMousemove={this.handleMouseMove}
				onContentMouseup={this.handleMouseUp}
				ref={node => {
					this.stageRef = node;
				}}
			>
				<Layer>
					{this.state.lines.map((line, i) => (
						<Line key={i} points={line} stroke="red" />
					))}
				</Layer>
			</Stage>
		);
	}
}

export default Canvas;
